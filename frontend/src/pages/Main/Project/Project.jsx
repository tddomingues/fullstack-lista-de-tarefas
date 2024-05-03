import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/ui/Button";
import { ProfileStyles } from "./styles";
import { useEffect } from "react";
import { getTask } from "../../../slices/taskSlice";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from "../../../assets/perfil.jpg";

//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";
import Loading from "../../../components/Loading/Loading";

const Project = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { task, loading } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;

  return (
    <ProfileStyles>
      <div className="info">
        <h2>Informações do Projeto</h2>
        <form>
          <label>
            <span>Nome</span>
            <input type="text" disabled value={task.name} />
          </label>
          <label>
            <span>Detalhes</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              disabled
              value={task.project}
            ></textarea>
          </label>
          {task.collaborators?.length > 0 && (
            <div className="collaborators--active">
              <span>Colaboradores</span>
              <ul>
                {task.collaborators.map((collaborator) => (
                  <li key={collaborator._id}>
                    <img src={Avatar} alt={collaborator.name} />
                    <span>{collaborator.email}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="priority-and-date">
            <label>
              <span>Prioridade</span>
              <input type="text" name="" id="" disabled value={task.priority} />
            </label>
            <div>
              <label>
                <span>Prazo</span>
                <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  value={moment(task.deadline).format("DD/MM/YYYY")}
                />
              </label>
              <label>
                <span>Data de Criação</span>
                <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  value={moment(task.createdAt).format("DD/MM/YYYY")}
                />
              </label>
              <label>
                <span>Data de Atualização</span>
                <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  value={moment(task.updatedAt).format("DD/MM/YYYY")}
                />
              </label>
            </div>
          </div>
        </form>
        <div className="buttons">
          <Button type="purple" onClick={() => navigate("/")}>
            Voltar
          </Button>
          <Button type="purple">Alterar Dados</Button>
        </div>
      </div>
    </ProfileStyles>
  );
};

export default Project;
