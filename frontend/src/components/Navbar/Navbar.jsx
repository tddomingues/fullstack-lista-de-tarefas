import { Header } from "./styles";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <Header>
      <div>
        <Link className="logo">Logo</Link>
        <nav>
          <ul className="navbar-logout">
            <Button $dark800>Entrar</Button>
            <Button $dark800>Registrar</Button>
          </ul>
          {/* <ul className="navbar-login">
            <li>
              <CiUser />
              <span>Tiago Domingues</span>
            </li>
            <Button $dark800>
              <IoIosLogOut />
            </Button>
          </ul> */}
        </nav>
      </div>
    </Header>
  );
};

export default Navbar;
