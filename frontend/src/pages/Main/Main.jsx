//styles
import { Main, Container } from "./styles.js";

//components
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

//router
import { Outlet } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Container>
        <Sidebar />
        <Main>
          <Outlet context={[user]} />
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
