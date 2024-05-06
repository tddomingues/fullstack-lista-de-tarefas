import { useState } from "react";

//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

//styles
import { TasksStyles } from "./styles";
import { MdDeleteOutline, MdOutlineOpenInNew } from "react-icons/md";
import Perfil from "../../assets/perfil.jpg";

//router
import { useNavigate } from "react-router-dom";

//utils
import { firstCapitalLetter } from "../../utils/firstCapitalLetter";

//redux
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../slices/taskSlice";

//components
import { Button } from "../ui/Button";

const Tasks = ({ tasks, title, user }) => {
  const navigate = useNavigate();
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));

    window.location.reload();
  };

  return (
    <TasksStyles>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Criador</th>
            <th>Prazo de Conclusão</th>

            <th>Prioridade</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.name}</td>
                <td className="creator">
                  <img
                    src={
                      !task.userId?.profilePicture
                        ? Perfil
                        : `http://localhost:3000/uploads/${task.userId?.profilePicture}`
                    }
                    alt={task.name}
                  />
                  <p>{task.userId?.name}</p>
                </td>
                <td>{moment(task.deadline).format("DD/MM/YYYY")}</td>

                <td>
                  <span>{firstCapitalLetter(task.priority)}</span>
                </td>
                <td>{firstCapitalLetter(task.status)}</td>
                <td className="buttons">
                  <Button
                    type="indigo"
                    onClick={() => navigate(`/project/${task._id}`)}
                  >
                    <MdOutlineOpenInNew />
                  </Button>
                </td>
                <td className="buttons">
                  <Button
                    type="red"
                    onClick={() => {
                      setConfirmDeletion(!confirmDeletion);
                      setTaskId(task._id);
                    }}
                    disabled={task.userId?._id !== user.userId ? true : false}
                  >
                    <MdDeleteOutline />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {confirmDeletion && (
        <div className="confirm-deletion">
          <div>
            <div className="title">
              <h3>Deletar Tarefa</h3>
            </div>
            <div className="description">
              <p>
                Você tem certeza que deseja excluir permanentemente essa tarefa
                ?
              </p>
            </div>
            <div className="buttons">
              <Button
                type="neutral50"
                onClick={() => setConfirmDeletion(false)}
                style={{ color: "black" }}
              >
                Cancelar
              </Button>
              <Button type="purple" onClick={() => handleDeleteTask(taskId)}>
                Deletar
              </Button>
            </div>
          </div>
        </div>
      )}
    </TasksStyles>
  );
};

export default Tasks;
