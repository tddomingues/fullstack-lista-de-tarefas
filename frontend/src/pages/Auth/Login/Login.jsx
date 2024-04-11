import { Link } from "react-router-dom";

import { Section, Main } from "../styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { reset, login } from "../../../slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, sucess, user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(typeof user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(login(data));
  };

  if (sucess && !loading) {
    navigate("/");
  }

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
              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}
              <input type="submit" value="Entrar" />
            </form>
            <div className="redirect-to-login">
              <p>Não possui cadastro?</p>
              <span>
                <Link to="/register">Cadastrar</Link>
              </span>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Login;
