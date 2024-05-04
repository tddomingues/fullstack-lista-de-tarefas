import { useEffect } from "react";

//styles
import { ProfileStyles } from "./styles";
import Avatar from "../../../assets/perfil.jpg";

//router
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

//conversor de horas
import moment from "moment";
import "moment/locale/pt-br";

//redux
import { getTask } from "../../../slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";

//components
import Loading from "../../../components/Loading/Loading";
import { Button } from "../../../components/ui/Button";

const Project = () => {
  const dispatch = useDispatch();

  const { task, loading } = useSelector((state) => state.task);

  const [user] = useOutletContext();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <ProfileStyles>
      {task && (
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
            <div className="creator">
              <span>Criador</span>
              <ul>
                <li>
                  <img src={Avatar} alt={task.userId?.name} />
                  <span>{task.userId?.email}</span>
                </li>
              </ul>
            </div>
            <div className="priority-and-date">
              <label>
                <span>Prioridade</span>
                <input
                  type="text"
                  name=""
                  id=""
                  disabled
                  value={task.priority}
                />
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
            <Button
              type="purple"
              onClick={() => navigate(`/updateTask/${id}`)}
              disabled={task.userId?._id !== user.userId ? true : false}
            >
              Alterar Dados
            </Button>
          </div>
        </div>
      )}
    </ProfileStyles>
  );
};

export default Project;
