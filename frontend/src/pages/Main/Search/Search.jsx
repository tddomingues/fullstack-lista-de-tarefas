import { useEffect } from "react";

//router
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

//styles
import { SectionStyles } from "./styles";
import { LuPlus } from "react-icons/lu";

//components
import { Button } from "../../../components/ui/Button";
import Tasks from "../../../components/Tasks/Tasks";
import Loading from "../../../components/Loading/Loading";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getTaskBySearch } from "../../../slices/taskSlice";
import SearchForm from "../../../components/SearchForm/SearchForm";

const Search = () => {
  const navigate = useNavigate();

  const { search } = useLocation();

  const query = new URLSearchParams(search).get("q");

  const dispatch = useDispatch();
  const { tasks, error, loading } = useSelector((state) => state.task);

  const [user] = useOutletContext();

  useEffect(() => {
    dispatch(getTaskBySearch(query.toLocaleLowerCase()));
  }, [dispatch, query]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <SectionStyles>
      <div>
        <Button type="purple" onClick={() => navigate("/new-task")}>
          <LuPlus />
        </Button>
        <SearchForm />
      </div>
      {tasks.length !== 0 ? (
        <Tasks
          tasks={tasks}
          error={error}
          loading={loading}
          title={`Pesquisa: ${query}`}
          user={user}
        />
      ) : (
        <div className="no-tasks">
          {tasks.length === 0 && (
            <p>Não foi encontrado tarefa(s) com essa pesquisa.</p>
          )}
        </div>
      )}
    </SectionStyles>
  );
};

export default Search;
