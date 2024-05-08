import { useEffect, useState } from "react";

//styles
import { UpdateStyles } from "./styles";
import Perfil from "../../../assets/perfil.jpg";
import { MdOutlineClear } from "react-icons/md";

//router
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getTask, reset, updateTask } from "../../../slices/taskSlice";
import { getUsers } from "../../../slices/userSlice";

//components
import MessageError from "../../../components/MessageError/MessageError";
import MessageSuccess from "../../../components/MessageSuccess/MessageSuccess";
import Loading from "../../../components/Loading/Loading";
import AddColaborator from "../../../components/AddColaborator/AddColaborator";
import { Button } from "../../../components/ui/Button";

const UpdateTask = () => {
  const { task, success, error, loading } = useSelector((state) => state.task);
  const { users } = useSelector((state) => state.user);

  const [user] = useOutletContext();

  const [name, setName] = useState(task.name);
  const [deadline, setDeadline] = useState(task.deadline);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [ownerId, setOwnerId] = useState(task.userId);
  const [collaborator, setCollaborator] = useState("");
  const [collaborators, setCollaborators] = useState(task.collaborators);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log(task);

  const { id } = useParams();

  const minDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredCollaboratorKeys = collaborators?.map((elem) => {
      return { _id: elem._id };
    });

    const data = {
      name,
      description,
      priority,
      status,
      ownerId: ownerId._id,
      deadline,
      collaborators: filteredCollaboratorKeys,
    };

    console.log(data);

    dispatch(updateTask({ data, id }));
  };

  const handleDeleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter((_collaborator) => {
      return _collaborator._id !== id;
    });

    setCollaborators(newCollaborators);
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getTask(id));
    dispatch(getUsers());
  }, [dispatch, id]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <UpdateStyles>
      {!success ? (
        <div className="update-form">
          <h2>Atualizar Tarefa</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input
                type="text"
                onChange={({ target }) => setName(target.value)}
                value={name || ""}
              />
            </label>

            <div className="collaborators">
              <div className="searchForCollaborators">
                <label>
                  <span>Pesquise por Colaborador(es/as)</span>
                  <input
                    type="search"
                    name=""
                    id=""
                    onChange={({ target }) => {
                      setCollaborator(target.value);
                    }}
                    value={collaborator || ""}
                    placeholder="Pesquisa pelo e-mail do usuário."
                  />
                </label>
                <AddColaborator
                  user={user}
                  users={users}
                  setCollaborators={setCollaborators}
                  collaborators={collaborators}
                  collaborator={collaborator}
                />
              </div>
              {collaborators?.length > 0 && (
                <div className="listOfCollaborators">
                  {collaborators.map((collaborator) => (
                    <div key={collaborator._id} className="collaborator">
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
                      <MdOutlineClear
                        onClick={() =>
                          handleDeleteCollaborator(collaborator._id)
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="priority-status">
              <label>
                <span>Prioridade</span>
                <select
                  name=""
                  id=""
                  onChange={({ target }) => setPriority(target.value)}
                  value={priority || ""}
                >
                  <option value="alta">Alta</option>
                  <option value="média">Média</option>
                  <option value="baixa">Baixa</option>
                </select>
              </label>
              <label>
                <span>Status</span>
                <select
                  name=""
                  id=""
                  onChange={({ target }) => setStatus(target.value)}
                  value={status || ""}
                >
                  <option value="Não Foi Iniciado">Não Foi Iniciado</option>
                  <option value="Em Progresso">Em Progresso</option>
                  <option value="Completado">Completado</option>
                  <option value="Adiado">Adiado</option>
                </select>
              </label>
            </div>

            <label>
              <span>Prazo de Entrega</span>
              <input
                type="date"
                name=""
                id=""
                min={minDate}
                onChange={({ target }) => setDeadline(target.value)}
                value={deadline || minDate}
              />
            </label>

            <label>
              <span>Descrição</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={({ target }) => setDescription(target.value)}
                value={description || ""}
              ></textarea>
            </label>

            {error && (
              <MessageError
                message={error}
                classType="error-message"
                sliceType="task"
              />
            )}
            <div className="buttons">
              <Button
                type="neutral50"
                onClick={() => navigate(`/project/${id}`)}
              >
                Voltar
              </Button>
              <input type="submit" value="Atualizar" className="btn-submit" />
            </div>
          </form>
        </div>
      ) : (
        <MessageSuccess id={id} />
      )}
    </UpdateStyles>
  );
};

export default UpdateTask;
