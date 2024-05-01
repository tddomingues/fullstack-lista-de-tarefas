//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

//styles
import { PriorityStyles } from "./styles";
import { LuFileInput } from "react-icons/lu";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks">
      <table>
        <caption>Atividades</caption>
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
                <td>{task.userId}</td>
                <td>
                  <LuFileInput />
                </td>
                <PriorityStyles priority={task.priority.toLowerCase()}>
                  <span>{task.priority}</span>
                </PriorityStyles>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
