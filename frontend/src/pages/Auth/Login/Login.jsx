import { Link } from "react-router-dom";

import { Section, Main } from "../styles";
import { useState, useEffect } from "react";

//components
import MessageError from "../../../components/MessageError/MessageError";

//redux
import { useDispatch, useSelector } from "react-redux";
import { reset, login } from "../../../slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(login(data));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <Main>
        <Section>
          <div>
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Email</span>
                <input
                  type="text"
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                />
              </label>
              <label>
                <span>Senha</span>
                <input
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password}
                />
              </label>
              {error && <MessageError message={error} />}
              <input type="submit" value="Entrar" />
            </form>
            <div className="redirect-to-login">
              <p>Não possui cadastro?</p>
              <span>
                <Link to="/auth/register">Cadastrar</Link>
              </span>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Login;
