import { useEffect, useState } from "react";

//styles
import { ProfileStyles } from "./styles";
import Perfil from "../../../assets/perfil.jpg";
import { MdEditNote, MdOutlineAddAPhoto } from "react-icons/md";

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
  const [viewImage, setViewImage] = useState("");
  const [file, setFile] = useState("");
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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("confirmPassword", confirmPassword);
    formData.append("password", password);
    console.log(file);

    if (file) {
      formData.append("file", file);
      console.log("object");
    }
    console.log(formData);
    dispatch(updateProfile(formData));
  };

  const handleProfilePicture = (e) => {
    setViewImage(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, id]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <ProfileStyles>
      {!updateData ? (
        <div className="profile">
          <div className="data">
            <form>
              <label className="profilePicture">
                <img
                  src={
                    !userSlice.profilePicture
                      ? Perfil
                      : `http://localhost:3000/uploads/${userSlice.profilePicture}`
                  }
                  alt={userSlice.name}
                />
              </label>
              <label>
                <span>Nome</span>
                <input type="text" disabled value={userSlice.name} />
              </label>
              {/* <label>
                <span>Cargo</span>
                <input type="text" disabled value="Gerente" />
              </label> */}
              <label>
                <span>Email</span>
                <input type="text" disabled value={userSlice.email} />
              </label>
            </form>
            <Button type="indigo" onClick={() => setUpdateData(!updateData)}>
              <MdEditNote />
            </Button>
          </div>
        </div>
      ) : !message ? (
        <div className="update">
          <h2>Atualizar Dados</h2>
          <form onSubmit={handleSubmit}>
            <label className="picture">
              <input type="file" id="" onChange={handleProfilePicture} />
              <span className="currentImage">
                <img
                  src={
                    userSlice.profilePicture && !viewImage
                      ? `http://localhost:3000/uploads/${userSlice.profilePicture}`
                      : viewImage
                  }
                  alt={userSlice.profilePicture && userSlice.name}
                />
              </span>
              <span className="iconInsertPhoto">
                <MdOutlineAddAPhoto />
              </span>
            </label>
            <label></label>
            <label>
              <span>Nome</span>
              <input
                type="text"
                onChange={({ target }) => setName(target.value)}
                value={name || ""}
                placeholder={userSlice.name}
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
            <div className="buttons">
              <Button onClick={() => window.location.reload()} type="neutral50">
                Voltar
              </Button>

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
