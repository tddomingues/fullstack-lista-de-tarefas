import { Header } from "./styles";
import { LuHome, LuUser2, LuLogOut } from "react-icons/lu";

import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const Navbar = () => {
  return (
    <Header>
      <div className="nav">
        <div>
          <Link>Logo</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <LuHome />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <span>
                  <LuUser2 />
                </span>
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn-logout">
        <Button type="transparent">
          <span>
            <LuLogOut />
          </span>
          Log out
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
