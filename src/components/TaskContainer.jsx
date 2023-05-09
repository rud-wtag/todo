import AddTask from 'components/AddTask';
import NoTaskPlaceholder from 'components/NoTaskPlaceholder';
import Task from 'components/Task';
import Button from 'components/ui/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { paginationLabel } from 'utils/helpers';
import { nextPage, paginate } from 'utils/helpers/ReducerHelper';

export default function TaskContainer() {
  const tasks = useSelector((state) => state.todoStates.todos);
  const isAddingTask = useSelector((state) => state.todoStates.isAddingTask);
  const [currentPage, setCurrentPage] = useState(1);
  const isTasksAvailable = !(tasks.length || isAddingTask);
  const isPaginationAvailable = tasks.length > 9;

  function loadMore() {
    setCurrentPage(nextPage(tasks, currentPage));
  }

  return (
    <>
      {isTasksAvailable && <NoTaskPlaceholder />}
      <div className="task_container">
        {isAddingTask && <AddTask />}
        {paginate(tasks, currentPage).map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
      {isPaginationAvailable && (
        <Button onClick={loadMore}>{paginationLabel(tasks, currentPage)}</Button>
      )}
    </>
  );
}
