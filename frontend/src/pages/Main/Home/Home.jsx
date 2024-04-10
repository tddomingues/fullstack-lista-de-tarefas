import { Link } from "react-router-dom";

import { Section } from "./styles";
import { LuSearch, LuFileInput } from "react-icons/lu";
import { Button } from "../../../components/ui/Button";

const Home = () => {
  return (
    <Section>
      <div className="create-and-search">
        <Button type="primary">Criar Tarefa</Button>
        <div>
          <input type="text" name="" id="" placeholder="Busque uma tarefa" />
          <LuSearch />
        </div>
      </div>
      <div className="tasks">
        <table>
          <caption>Atividades</caption>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Prazo de Conclusão</th>
              <th>Criador</th>
              <th>Projeto</th>
              <th>Prioridade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projeto X</td>
              <td>12/01/2024</td>
              <td>por Tiago</td>
              <td>
                <Link to="/project/:id">
                  <LuFileInput />
                </Link>
              </td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Projeto X</td>
              <td>12/01/2024</td>
              <td>por Tiago</td>
              <td>
                <Link>link</Link>
              </td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Projeto X</td>
              <td>12/01/2024</td>
              <td>por Tiago</td>
              <td>
                <Link>link</Link>
              </td>
              <td>Alta</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Home;
