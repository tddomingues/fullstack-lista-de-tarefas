import { useDispatch, useSelector } from "react-redux";
import Tasks from "../../../components/Tasks/Tasks";
import { SectionStyles } from "./styles";
import { useEffect } from "react";
import { getTasksDoneCollaboratively } from "../../../slices/taskSlice";

const Collaboration = () => {
  const dispatch = useDispatch();

  const { tasks, error, loading } = useSelector((state) => state.task);

  console.log(tasks);

  useEffect(() => {
    dispatch(getTasksDoneCollaboratively());
  }, [dispatch]);
  return (
    <SectionStyles>
      {tasks?.length !== 0 ? (
        <Tasks
          tasks={tasks}
          error={error}
          loading={loading}
          title="Atividades que você está ajudando"
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
