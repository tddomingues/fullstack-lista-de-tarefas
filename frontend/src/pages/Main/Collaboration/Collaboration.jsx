import { useEffect } from "react";

//components
import Tasks from "../../../components/Tasks/Tasks";
import Loading from "../../../components/Loading/Loading";

//styles
import { SectionStyles } from "./styles";

//redux
import { getTasksDoneCollaboratively } from "../../../slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const Collaboration = () => {
  const dispatch = useDispatch();

  const { tasks, error, loading } = useSelector((state) => state.task);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getTasksDoneCollaboratively());
  }, [dispatch]);

  if (user === null) return window.location.reload();

  if (loading) return <Loading />;

  return (
    <SectionStyles>
      {tasks?.length !== 0 ? (
        <Tasks
          tasks={tasks}
          error={error}
          loading={loading}
          title="Suas Tarefas Em Colaboração"
          user={user}
        />
      ) : (
        <div className="no-collaboration">
          <p>Você não faz parte de nenhum projeto.</p>
        </div>
      )}
    </SectionStyles>
  );
};

export default Collaboration;
