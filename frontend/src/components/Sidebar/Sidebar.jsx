//styles
import { Header } from "./styles";
import { LuHome, LuUser2, LuLogOut } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";

//router
import { Link } from "react-router-dom";

//components
import { Button } from "../ui/Button";

//redux
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user")) || "";

  const handleLogout = () => {
    localStorage.removeItem("user");

    dispatch(logout());
  };

  return (
    <Header>
      <div className="nav">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <LuHome />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={`/collaboration`}>
                <span>
                  <GrGroup />
                </span>
                <span>Colaborações</span>
              </Link>
            </li>
            <li>
              <Link to={`/profile/${user.userId}`}>
                <span>
                  <LuUser2 />
                </span>
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn-logout">
        <Button type="neutral950" onClick={handleLogout}>
          Sair
          <span>
            <LuLogOut />
          </span>
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
