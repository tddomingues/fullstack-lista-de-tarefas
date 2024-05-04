//styles
import { StyleFooter } from "./styles";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <StyleFooter>
      <div>
        <p>2024 Logo, todos os direitos reservados por Tiago Domingues</p>
        <span
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/tiago3domingues")
          }
        >
          <TfiLinkedin />
        </span>
      </div>
    </StyleFooter>
  );
};

export default Footer;
