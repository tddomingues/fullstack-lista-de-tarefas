import React from "react";
import { Link } from "react-router-dom";

import { Section } from "../styles";

const Register = () => {
  return (
    <Section>
      <div>
        <h2>Registrar</h2>
        <form>
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
          <label>
            <span>Email</span>
            <input type="text" />
          </label>
          <label>
            <span>Senha</span>
            <input type="password" />
          </label>
          <label>
            <span>Confirmar senha</span>
            <input type="text" />
          </label>
          {/* componente */}
          {/* <div className="error-message">
            <p>E-mail inválido</p>
          </div> */}
          <input type="submit" value="Registrar" />
        </form>
        <div className="redirect-to-login">
          <p>Já possui cadastro?</p>
          <span>
            <Link>Entrar</Link>
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Register;
