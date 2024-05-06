import { Button } from "../../../components/ui/Button";
import { SectionStyles } from "./styles";
import Avatar from "../../../assets/perfil.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, reset, updateTask } from "../../../slices/taskSlice";

const Notes = () => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { task, success } = useSelector((state) => state.task);
  console.log(success);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      notes: {
        comment,
        createdBy: {
          _id: user.userId,
        },
      },
    };

    console.log(data);

    dispatch(updateTask({ data, id }));
  };

  useEffect(() => {
    dispatch(getTask(id));
    dispatch(reset());
  }, [dispatch, id]);

  // if (success === true) return window.location.reload();

  return (
    <SectionStyles>
      <div className="info">
        <h2>Nova Nota</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Comentário</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={({ target }) => setComment(target.value)}
              value={comment}
            ></textarea>
          </label>
          <div className="buttons">
            <Button type="purple" onClick={() => navigate(`/project/${id}`)}>
              Voltar
            </Button>
            <input type="submit" value="Inserir Nota" />
          </div>
        </form>
      </div>

      <div className="notes">
        <h2>Notas</h2>

        {task.notes &&
          task.notes.map((note) => (
            <div key={note._id}>
              <img
                src={
                  !task.userId?.profilePicture
                    ? Avatar
                    : `http://localhost:3000/uploads/${note.createdBy?.profilePicture}`
                }
                alt={task.name}
              />
              <div>
                <h4>{note.createdBy?.name}</h4>
                <p>{note.comment}</p>
              </div>
            </div>
          ))}
      </div>
    </SectionStyles>
  );
};

export default Notes;
