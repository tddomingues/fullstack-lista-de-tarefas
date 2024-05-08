import { useEffect } from "react";

//styles
import { ProfileStyles } from "./styles";
import Avatar from "../../../assets/perfil.jpg";
import Perfil from "../../../assets/perfil.jpg";

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
import { firstCapitalLetter } from "../../../utils/firstCapitalLetter";

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
        <div className="data">
          <h2>Informações do Projeto</h2>
          <form>
            <label>
              <span>Nome</span>
              <input type="text" disabled value={task.name} />
            </label>
            <label>
              <span>Descrição</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                disabled
                value={task.description}
              ></textarea>
            </label>
            {task.collaborators?.length > 0 && (
              <div className="collaborators">
                <span>Colaboradores</span>
                <div className="listOfCollaborators">
                  {task.collaborators.map((collaborator) => (
                    <div key={collaborator._id}>
                      <img
                        src={
                          !collaborator.profilePicture
                            ? Perfil
                            : `http://localhost:3000/uploads/${collaborator.profilePicture}`
                        }
                        alt={collaborator.name}
                      />
                      <span>
                        <h4>{collaborator.name}</h4>
                        <p>{collaborator.email}</p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="creator">
              <span>Criador</span>
              <div className="creator-data">
                <div>
                  <img
                    src={
                      !task.userId?.profilePicture
                        ? Perfil
                        : `http://localhost:3000/uploads/${task.userId?.profilePicture}`
                    }
                    alt={task.userId?.name}
                  />
                  <span>
                    <h4>{task.userId?.name}</h4>
                    <p>{task.userId?.email}</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="priority-and-date">
              <div>
                <label>
                  <span>Prioridade</span>
                  <input
                    type="text"
                    name=""
                    id=""
                    disabled
                    value={firstCapitalLetter(task.priority)}
                  />
                </label>
                <label>
                  <span>Status</span>
                  <input
                    type="text"
                    name=""
                    id=""
                    disabled
                    value={firstCapitalLetter(task.status)}
                  />
                </label>
              </div>

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
            <Button type="neutral50" onClick={() => navigate("/")}>
              Voltar
            </Button>
            <div>
              <Button
                type="indigo"
                onClick={() => navigate(`/project/notes/${id}`)}
              >
                Inserir Nota
              </Button>{" "}
              <Button
                type="purple"
                onClick={() => navigate(`/updateTask/${id}`)}
                disabled={task.userId?._id !== user.userId ? true : false}
              >
                Alterar Dados
              </Button>
            </div>
          </div>
        </div>
      )}
    </ProfileStyles>
  );
};

export default Project;
