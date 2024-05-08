//styles
import { HeaderStyles } from "./styles";
import { LuHome, LuUser2, LuLogOut, LuMenu } from "react-icons/lu";
import { GrGroup, GrClose } from "react-icons/gr";

//router
import { Link } from "react-router-dom";

//components
import { Button } from "../ui/Button";

//redux
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useState } from "react";

const Navbar = () => {
  const [menuIsClosed, setMenuIsClosed] = useState("true");

  console.log(menuIsClosed);

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user")) || "";

  const handleLogout = () => {
    localStorage.removeItem("user");

    dispatch(logout());
  };

  return (
    <HeaderStyles menuisclosed={menuIsClosed}>
      <div className="nav">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <nav className="menu-desktop">
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
            <li className="logout">
              <Link onClick={handleLogout}>
                Sair
                <span>
                  <LuLogOut />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          className="open"
          onClick={() => setMenuIsClosed("false")}
          type="ffffff0"
        >
          <LuMenu />
        </Button>
        <nav className="menu-mobile">
          <Button
            className="closed"
            onClick={() => setMenuIsClosed("true")}
            type="neutral900"
          >
            <GrClose />
          </Button>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuIsClosed("true")}>
                <span>
                  <LuHome />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/collaboration`}
                onClick={() => setMenuIsClosed("true")}
              >
                <span>
                  <GrGroup />
                </span>
                <span>Colaborações</span>
              </Link>
            </li>
            <li>
              <Link
                to={`/profile/${user.userId}`}
                onClick={() => setMenuIsClosed("true")}
              >
                <span>
                  <LuUser2 />
                </span>
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
          <Button onClick={handleLogout} type="neutral200" className="logout">
            Sair
            <span>
              <LuLogOut />
            </span>
          </Button>
        </nav>
      </div>
    </HeaderStyles>
  );
};

export default Navbar;
