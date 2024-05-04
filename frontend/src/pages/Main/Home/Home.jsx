import { useEffect } from "react";

//router
import { useNavigate, useOutletContext } from "react-router-dom";

//styles
import { SectionStyles } from "./styles";
import { LuSearch, LuPlus } from "react-icons/lu";

//components
import { Button } from "../../../components/ui/Button";
import Tasks from "../../../components/Tasks/Tasks";
import Loading from "../../../components/Loading/Loading";

//redux
import { useDispatch, useSelector } from "react-redux";
import { tasksByUser } from "../../../slices/taskSlice";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { tasks, error, loading } = useSelector((state) => state.task);

  const [user] = useOutletContext();

  useEffect(() => {
    dispatch(tasksByUser());
  }, [dispatch]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <SectionStyles>
      <div>
        <Button type="purple" onClick={() => navigate("/new-task")}>
          <LuPlus />
        </Button>
        <div>
          <input type="text" name="" id="" placeholder="Busque uma tarefa" />
          <LuSearch />
        </div>
      </div>
      {tasks.length !== 0 ? (
        <Tasks
          tasks={tasks}
          error={error}
          loading={loading}
          title="Suas Atividades"
          user={user}
        />
      ) : (
        <div className="no-tasks">
          <p>Você não possui tarefas.</p>
        </div>
      )}
    </SectionStyles>
  );
};

export default Home;
