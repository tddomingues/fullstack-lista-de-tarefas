import { useEffect, useState } from "react";

//styles
import { ProfileStyles } from "./styles";

//redux
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, getUser } from "../../../slices/userSlice";

//components
import { Button } from "../../../components/ui/Button";
import MessageError from "../../../components/MessageError/MessageError";
import MessageSuccess from "../../../components/MessageSuccess/MessageSuccess";
import Loading from "../../../components/Loading/Loading";

//router
import { useOutletContext, useParams } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [updateData, setUpdateData] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();

  const {
    user: userSlice,
    error,
    message,
    loading,
  } = useSelector((state) => state.user);

  const [user] = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: userSlice.email,
      confirmPassword: confirmPassword,
      password: password,
    };

    dispatch(updateProfile(data));
  };

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <ProfileStyles>
      {!updateData ? (
        <div className="info">
          <h2>Informações</h2>
          <form>
            <label>
              <span>Email</span>
              <input type="email" value={userSlice.email || ""} disabled />
            </label>
            <label>
              <span>Nome</span>
              <input type="text" value={userSlice.name || ""} disabled />
            </label>
          </form>
          <Button type="purple" onClick={() => setUpdateData(!updateData)}>
            Alterar Dados
          </Button>
        </div>
      ) : !message ? (
        <div className="update">
          <h2>Atualizar Dados</h2>
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
              <span>Senha</span>
              <input
                type="password"
                onChange={({ target }) => setPassword(target.value)}
                value={password || ""}
              />
            </label>
            <label>
              <span>Confirmar Senha</span>
              <input
                type="password"
                onChange={({ target }) => setConfirmPassword(target.value)}
                value={confirmPassword || ""}
              />
            </label>
            {error && (
              <MessageError
                message={error}
                classType="error-message"
                sliceType="user"
              />
            )}
            <div>
              <input
                type="button"
                value="Voltar"
                className="btn-submit"
                onClick={() => window.location.reload()}
              />
              <input type="submit" value="Atualizar" className="btn-submit" />
            </div>
          </form>
        </div>
      ) : (
        <MessageSuccess type="profile" />
      )}
    </ProfileStyles>
  );
};

export default Profile;
