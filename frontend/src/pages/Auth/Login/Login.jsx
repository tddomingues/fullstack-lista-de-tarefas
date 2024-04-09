import React from "react";
import { Link } from "react-router-dom";

import { Section } from "../styles";

const Login = () => {
  return (
    <Section>
      <div>
        <h2>Entrar</h2>
        <form>
          <label>
            <span>Email</span>
            <input type="text" />
          </label>
          <label>
            <span>Senha</span>
            <input type="password" />
          </label>
          {/* componente */}
          {/* <div className="error-message">
            <p>E-mail inválido</p>
          </div> */}
          <input type="submit" value="Registrar" />
        </form>
        <div className="redirect-to-login">
          <p>Não possui cadastro?</p>
          <span>
            <Link>Entrar</Link>
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Login;
