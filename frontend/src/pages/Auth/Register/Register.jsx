import { useState, useEffect } from "react";

import { Link, Navigate } from "react-router-dom";

import { Section, Main } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../../slices/authSlice";
import MessageError from "../../../components/MessageError/MessageError";

const Register = () => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log("success ", success);

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

  if (success) return <Navigate to="/auth/login" />;

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
              {error && <MessageError message={error} />}
              <input type="submit" value="Registrar" />
            </form>
            <div className="redirect-to-login">
              <p>Já possui cadastro?</p>
              <span>
                <Link to="/auth/login">Entrar</Link>
              </span>
            </div>
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Register;
