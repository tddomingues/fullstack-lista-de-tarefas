import { useEffect, useState } from "react";

//components
import { Button } from "../../../components/ui/Button";
import Loading from "../../../components/Loading/Loading";
import MessageError from "../../../components/MessageError/MessageError";
import ConfirmDeletion from "../../../components/ConfirmDeletion/ConfirmDeletion";

//styles
import { SectionStyles } from "./styles";
import { MdDeleteOutline } from "react-icons/md";
import Avatar from "../../../assets/perfil.jpg";

//redux
import { useDispatch, useSelector } from "react-redux";
import { createNote, getNotesByTask, reset } from "../../../slices/noteSlice";

//router
import { useNavigate, useParams } from "react-router-dom";

//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

const Notes = () => {
  const [comment, setComment] = useState("");
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [noteId, setNoteId] = useState(undefined);

  const dispatch = useDispatch();

  const { notes, error, success, loading } = useSelector((state) => state.note);
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      comment,
      taskId: id,
    };

    dispatch(createNote(data));
  };

  useEffect(() => {
    dispatch(getNotesByTask(id));
    dispatch(reset());
  }, [dispatch, id]);

  if (success) window.location.reload();

  if (loading) return <Loading />;

  return (
    <SectionStyles>
      <div className="create-note">
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
          {error && <MessageError message={error} />}
          <div className="buttons">
            <Button type="neutral50" onClick={() => navigate(`/project/${id}`)}>
              Voltar
            </Button>
            <input type="submit" value="Inserir Nota" />
          </div>
        </form>
      </div>

      {notes.length > 0 && (
        <div className="notes">
          <h2>Notas</h2>
          {notes.map((note) => (
            <div key={note._id} className="listOfNotes">
              <span className="createdAt">
                {moment(note.createdAt).format("DD/MM/YYYY à[s] hh:mm:ss")}
              </span>
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
                <Button
                  type="red"
                  onClick={() => {
                    setConfirmDeletion(!confirmDeletion);
                    setNoteId(note._id);
                  }}
                >
                  <MdDeleteOutline />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
      {confirmDeletion && (
        <ConfirmDeletion
          type="note"
          title="Nota"
          description="nota"
          id={noteId}
        />
      )}
    </SectionStyles>
  );
};

export default Notes;
