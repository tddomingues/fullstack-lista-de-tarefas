import { Button } from "../../../components/ui/Button";
import Loading from "../../../components/Loading/Loading";
import { SectionStyles } from "./styles";
import Avatar from "../../../assets/perfil.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

import {
  createNote,
  deleteNote,
  getNotesByTask,
} from "../../../slices/noteSlice";

const Notes = () => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const { notes, error, success } = useSelector((state) => state.note);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(notes);

  const handleTaskDelete = (id) => {
    dispatch(deleteNote(id));
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      comment,
      taskId: id,
    };

    console.log(data);

    dispatch(createNote(data));
  };

  useEffect(() => {
    dispatch(getNotesByTask(id));
  }, [dispatch, id]);

  if (!success) return <Loading />;

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
        {notes &&
          notes.map((note) => (
            <div key={note._id}>
              <p className="date">
                {moment(note.createdAt).format("DD/MM/YYYY à[s] hh:mm:ss")}
              </p>
              <img
                src={
                  !note.userId?.profilePicture
                    ? Avatar
                    : `http://localhost:3000/uploads/${note.userId?.profilePicture}`
                }
                alt={note.userId?.name}
              />
              <div className="name-comment">
                <h4>{note.userId?.name}</h4>
                <p>{note.comment}</p>
              </div>
              {note.userId?._id === user.userId && (
                <Button type="red" onClick={() => handleTaskDelete(note._id)}>
                  X
                </Button>
              )}
            </div>
          ))}
      </div>
    </SectionStyles>
  );
};

export default Notes;
