import { useEffect, useState } from "react";

import { TaskStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createTask } from "../../../slices/taskSlice";
import Message from "../../../components/MessageError/MessageError";
import { Button } from "../../../components/ui/Button";
import MessageSuccess from "../../../components/MessageSuccess/MessageSuccess";
import { getUsers } from "../../../slices/userSlice";

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
  const { user: sliceUser } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

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

    console.log(data);

    dispatch(createTask(data));
  };

  const minDate = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const addCollaborator = (e) => {
    e.preventDefault();

    const userExists = collaborators.filter((_collaborator) => {
      return _collaborator.email === collaborator;
    });

    if (userExists.length !== 0) return;

    const _collaborator = users.filter((user) => {
      return user.email === collaborator && sliceUser.userId !== user._id;
    });

    if (_collaborator.length === 0) return;

    setCollaborators((prev) => [...prev, ..._collaborator]);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
                <Button type="neutral950" onClick={addCollaborator}>
                  Adicionar
                </Button>
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
            {success && (
              <Message
                message={success}
                classType="sucess-message"
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
