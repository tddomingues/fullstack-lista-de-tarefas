import { useEffect, useState } from "react";

//styles
import { TaskStyles } from "./styles";

//router
import { useNavigate, useOutletContext } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../slices/userSlice";
import { createTask, reset } from "../../../slices/taskSlice";

//components
import MessageSuccess from "../../../components/MessageSuccess/MessageSuccess";
import Message from "../../../components/MessageError/MessageError";
import AddColaborator from "../../../components/AddColaborator/AddColaborator";

const CreateTask = () => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("alta");
  const [collaborator, setCollaborator] = useState("");
  const [collaborators, setCollaborators] = useState([]);

  const dispatch = useDispatch();

  const { success, error } = useSelector((state) => state.task);
  const { users } = useSelector((state) => state.user);

  const [user] = useOutletContext();

  const minDate = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredCollaboratorKeys = collaborators.map((elem) => {
      return { _id: elem._id };
    });

    const data = {
      name,
      project,
      priority,
      userId: user.userId,
      deadline,
      collaborators: filteredCollaboratorKeys,
    };

    dispatch(createTask(data));
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(reset());
  }, [dispatch]);

  if (user === null) return window.location.reload();

  return (
    <TaskStyles>
      {!success ? (
        <div className="creation-form">
          <h2>Criar Tarefa</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input
                type="text"
                onChange={({ target }) => setName(target.value)}
                value={name || ""}
              />
            </label>

            <div>
              <div>
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
              {collaborators.length > 0 && (
                <label>
                  <select name="" id="">
                    <option value="" disabled>
                      Seu(s) colaborador(es)
                    </option>
                    {collaborators &&
                      collaborators.map((collaborator) => (
                        <option
                          value={collaborator._id}
                          disabled
                          key={collaborator._id}
                        >
                          {`${collaborator.name} (${collaborator.email})`}
                        </option>
                      ))}
                  </select>
                </label>
              )}
            </div>

            <div>
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
            </div>

            <label>
              <span>Projeto</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={({ target }) => setProject(target.value)}
                value={project || ""}
              ></textarea>
            </label>

            {error && (
              <Message
                message={error}
                classType="error-message"
                sliceType="task"
              />
            )}
            <div className="buttons">
              <input
                type="button"
                value="Voltar"
                className="btn-submit"
                onClick={() => navigate("/")}
              />
              <input type="submit" value="Criar" className="btn-submit" />
            </div>
          </form>
        </div>
      ) : (
        <MessageSuccess type="task" text={name} />
      )}
    </TaskStyles>
  );
};

export default CreateTask;
