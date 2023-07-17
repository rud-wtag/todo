import AddTask from 'components/AddTask';
import NoTaskPlaceholder from 'components/NoTaskPlaceholder';
import Task from 'components/Task';
import { useSelector } from 'react-redux';

export default function TaskContainer() {
  const tasks = useSelector((state) => state.todoStates.todos);
  const isNewTaskRequested = useSelector((state) => state.todoStates.isNewTaskRequested);
  const isTasksAvailable = tasks.length || isNewTaskRequested;

  return (
    <>
      {!isTasksAvailable && <NoTaskPlaceholder />}
      <div className="task_container grid grid-gap grid-cols-1 grid-cols-md-2 grid-cols-lg-3">
        {isNewTaskRequested && <AddTask />}
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </>
  );
}
