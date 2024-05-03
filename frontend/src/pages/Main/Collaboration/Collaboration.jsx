import { useDispatch, useSelector } from "react-redux";
import Tasks from "../../../components/Tasks/Tasks";
import { SectionStyles } from "./styles";
import { useEffect } from "react";
import { getTasksDoneCollaboratively } from "../../../slices/taskSlice";
import Loading from "../../../components/Loading/Loading";

const Collaboration = () => {
  const dispatch = useDispatch();

  const { tasks, error, loading } = useSelector((state) => state.task);

  console.log(tasks);

  useEffect(() => {
    dispatch(getTasksDoneCollaboratively());
  }, [dispatch]);

  if (loading) return <Loading />;
  return (
    <SectionStyles>
      {tasks?.length !== 0 ? (
        <Tasks
          tasks={tasks}
          error={error}
          loading={loading}
          title="Suas Tarefas Em Colaboração"
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
