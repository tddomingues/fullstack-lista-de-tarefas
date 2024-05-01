import React from "react";
import { Button } from "../ui/Button";
import { Container } from "./styles";

const MessageSuccess = ({ text, type }) => {
  return (
    <Container>
      {type === "task" ? (
        <h2>Parabéns! Tarefa {"'" + text + "'"} criada com sucesso.</h2>
      ) : type === "profile" ? (
        <h2>Parabéns! Conta atualizada com sucesso.</h2>
      ) : (
        <h2>Atualizada com sucesso.</h2>
      )}

      <div className="btns">
        {type === "task" ? (
          <Button type="neutral50" onClick={() => window.location.reload()}>
            Criar Nova Tarefa
          </Button>
        ) : type === "profile" ? (
          <Button type="neutral50" onClick={() => window.location.reload()}>
            Voltar
          </Button>
        ) : (
          <Button type="neutral50" onClick={() => window.location.reload()}>
            Voltar
          </Button>
        )}
      </div>
    </Container>
  );
};

export default MessageSuccess;
