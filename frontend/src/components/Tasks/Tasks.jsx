//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

//styles
import { PriorityStyles, TasksStyles } from "./styles";
import { MdDeleteOutline, MdOutlineOpenInNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { firstCapitalLetter } from "../../utils/firstCapitalLetter";

import { useDispatch, useSelector } from "react-redux";

import { Button } from "../ui/Button";
import { useState } from "react";
import { deleteTask } from "../../slices/taskSlice";

const Tasks = ({ tasks, title }) => {
  const navigate = useNavigate();
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleDeleteTask = (id) => {
    console.log(id);
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
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.name}</td>
                <td>{task.userId.name}</td>
                <td>{moment(task.deadline).format("DD/MM/YYYY")}</td>

                <PriorityStyles priority={task.priority.toLowerCase()}>
                  <span>{firstCapitalLetter(task.priority)}</span>
                </PriorityStyles>
                <td>Em andamento</td>
                <td className="buttons">
                  <Button
                    type="indigo"
                    onClick={() => navigate(`/project/${task._id}`)}
                  >
                    <MdOutlineOpenInNew />
                  </Button>
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
            <h3>Deseja Apagar a Tarefa ?</h3>
            <div>
              <Button type="purple" onClick={() => setConfirmDeletion(false)}>
                Voltar
              </Button>
              <Button type="purple" onClick={() => handleDeleteTask(taskId)}>
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      )}
    </TasksStyles>
  );
};

export default Tasks;
