import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Section, Main } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../../slices/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { error, sucess, loading } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(register(data));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <Main>
        <Section>
          <div>
            <h2>Registrar</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Nome</span>
                <input
                  type="text"
                  onChange={({ target }) => setName(target.value)}
                  value={name || ""}
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="text"
                  onChange={({ target }) => setEmail(target.value)}
                  value={email || ""}
                />
              </label>
              <label>
                <span>Senha</span>
                <input
                  type="password"
                  onChange={({ target }) => setPassword(target.value)}
                  value={password || ""}
                />
              </label>
              <label>
                <span>Confirmar senha</span>
                <input
                  type="password"
                  onChange={({ target }) => setConfirmPassword(target.value)}
                  value={confirmPassword || ""}
                />
              </label>
              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}
              <input type="submit" value="Registrar" />
            </form>
            <div className="redirect-to-login">
              <p>Já possui cadastro?</p>
              <span>
                <Link to="/login">Entrar</Link>
              </span>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Register;
