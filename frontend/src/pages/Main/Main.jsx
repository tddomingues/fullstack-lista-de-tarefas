import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { Main, Container } from "./styles.js";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
