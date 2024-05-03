//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

//styles
import { PriorityStyles, TasksStyles } from "./styles";
import { LuFileInput } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { firstCapitalLetter } from "../../utils/firstCapitalLetter";

const Tasks = ({ tasks, title }) => {
  console.log("tasks ", tasks);
  const navigate = useNavigate();
  return (
    <TasksStyles>
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Prazo de Conclusão</th>
            <th>Criador</th>
            <th>Projeto</th>
            <th>Prioridade</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.name}</td>
                <td>{moment(task.deadline).format("DD/MM/YYYY")}</td>
                <td>{task.userId.name}</td>
                <td onClick={() => navigate(`/project/${task._id}`)}>
                  <LuFileInput style={{ cursor: "pointer" }} />
                </td>
                <PriorityStyles priority={task.priority.toLowerCase()}>
                  <span>{firstCapitalLetter(task.priority)}</span>
                </PriorityStyles>
              </tr>
            ))}
        </tbody>
      </table>
    </TasksStyles>
  );
};

export default Tasks;
