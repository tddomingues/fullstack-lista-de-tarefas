//styles
import { ConfirmDeletionStyles } from "./styles";
import { Button } from "../ui/Button";

//redux
import { useDispatch } from "react-redux";
import { deleteTask } from "../../slices/taskSlice";
import { deleteNote } from "../../slices/noteSlice";

const ConfirmDeletion = ({ type, id, title, description }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    if (type === "task") {
      dispatch(deleteTask(id));
    } else if (type === "note") {
      dispatch(deleteNote(id));
    }

    window.location.reload();
  };

  return (
    <ConfirmDeletionStyles>
      <div>
        <div className="title">
          <h3>Deletar {title}</h3>
        </div>
        <div className="description">
          <p>
            Você tem certeza que deseja excluir permanentemente essa{" "}
            {description} ?
          </p>
        </div>
        <div className="buttons">
          <Button
            type="neutral50"
            onClick={() => window.location.reload()}
            style={{ color: "black" }}
          >
            Cancelar
          </Button>
          <Button type="purple" onClick={handleDeleteTask}>
            Deletar
          </Button>
        </div>
      </div>
    </ConfirmDeletionStyles>
  );
};

export default ConfirmDeletion;
