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

//components
import { Button } from "../ui/Button";
import ConfirmDeletion from "../ConfirmDeletion/ConfirmDeletion";

const Tasks = ({ tasks, title, user }) => {
  const navigate = useNavigate();
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [taskId, setTaskId] = useState(null);

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
                  <span>{task.userId?.name}</span>
                </td>
                <td className="deadline">
                  {moment(task.deadline).format("DD/MM/YYYY")}
                </td>

                <td className="priority">
                  <span>{firstCapitalLetter(task.priority)}</span>
                </td>
                <td className="status">{firstCapitalLetter(task.status)}</td>
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
                  <Button
                    type="indigo"
                    onClick={() => navigate(`/project/${task._id}`)}
                  >
                    <MdOutlineOpenInNew />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {confirmDeletion && (
        <ConfirmDeletion
          type="task"
          title="Tarefa"
          description="tarefa"
          id={taskId}
        />
      )}
    </TasksStyles>
  );
};

export default Tasks;
