import React from "react";
import { Button } from "../ui/Button";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const MessageSuccess = ({ text, type, id }) => {
  const navigate = useNavigate();
  return (
    <Container>
      {type === "task" ? (
        <h2>Parabéns! Tarefa {"'" + text + "'"} criada com sucesso.</h2>
      ) : type === "profile" ? (
        <h2>Parabéns! Conta atualizada com sucesso.</h2>
      ) : (
        <h2>Atualizado com sucesso.</h2>
      )}

      <div className="buttons">
        {type === "task" ? (
          <div>
            <Button type="neutral50" onClick={() => navigate("/")}>
              Voltar
            </Button>
            <Button type="neutral50" onClick={() => window.location.reload()}>
              Criar Nova Tarefa
            </Button>
          </div>
        ) : type === "profile" ? (
          <Button type="neutral50" onClick={() => window.location.reload()}>
            Voltar
          </Button>
        ) : (
          <Button type="neutral50" onClick={() => navigate(`/project/${id}`)}>
            Voltar
          </Button>
        )}
      </div>
    </Container>
  );
};

export default MessageSuccess;
