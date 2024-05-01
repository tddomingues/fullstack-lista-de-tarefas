import { useEffect } from "react";

//router
import { useNavigate } from "react-router-dom";

//styles
import { SectionStyles } from "./styles";
import { LuSearch } from "react-icons/lu";

//components
import { Button } from "../../../components/ui/Button";
import Tasks from "./Tasks/Tasks";
import Loading from "../../../components/Loading/Loading";

//redux
import { useDispatch, useSelector } from "react-redux";

import { tasksByUser } from "../../../slices/taskSlice";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { tasks, error, loading } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(tasksByUser());
  }, [dispatch]);

  if (loading) return <Loading />;
  return (
    <SectionStyles>
      <div className="create-and-search">
        <Button type="purple" onClick={() => navigate("/new-task")}>
          Criar Tarefa
        </Button>
        <div>
          <input type="text" name="" id="" placeholder="Busque uma tarefa" />
          <LuSearch />
        </div>
      </div>
      <Tasks tasks={tasks} error={error} loading={loading} />
    </SectionStyles>
  );
};

export default Home;
