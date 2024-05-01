import React, { useState } from "react";

import { TaskStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createTask } from "../../../slices/taskSlice";
import Message from "../../../components/MessageError/MessageError";
import { Button } from "../../../components/ui/Button";
import MessageSuccess from "../../../components/MessageSuccess/MessageSuccess";

const CreateTask = () => {
  const [name, setName] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [deadline, setDeadline] = useState("");
  const [creator, setCreator] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("");
  const [taskCreated, setTaskCreated] = useState(false);

  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.task);

  console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    const data = {
      name,
      project,
      priority,
      userId: user.userId,
      deadline,
    };

    console.log(data);

    dispatch(createTask(data));
  };

  const minDate = new Date().toISOString().split("T")[0];
  console.log(new Date("2024-05-02").toISOString());

  const navigate = useNavigate();

  return (
    <TaskStyles>
      {!success ? (
        <div className="creation-form">
          <h2>Criar Tarefa</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <span>Nome</span>
                <input
                  type="text"
                  onChange={({ target }) => setName(target.value)}
                  value={name || ""}
                />
              </label>
              <label>
                <span>Prioridade</span>
                <select
                  name=""
                  id=""
                  onChange={({ target }) => setPriority(target.value)}
                  value={priority || ""}
                >
                  <option value="">Qual ?</option>
                  <option value="Alta">Alta</option>
                  <option value="Média">Média</option>
                  <option value="Baixa">Baixa</option>
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
            <div className="btns">
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
