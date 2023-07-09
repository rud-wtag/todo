import AddTask from 'components/AddTask';
import NoTaskPlaceholder from 'components/NoTaskPlaceholder';
import Task from 'components/Task';
import Button from 'components/ui/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { paginationLabel } from 'utils/helpers';
import { nextPage, paginate, searchAndFilter } from 'utils/helpers/ReducerHelper';

export default function TaskContainer() {
  const tasks = useSelector((state) => state.todoStates.todos);
  const [todos, setTodos] = useState(tasks);
  const filter = useSelector((state) => state.filterStates);
  const isAddingTask = useSelector((state) => state.todoStates.isAddingTask);
  const [currentPage, setCurrentPage] = useState(1);
  const isTasksAvailable = !(tasks.length || isAddingTask);
  const isPaginationAvailable = todos.length > 9;

  function loadMore() {
    setCurrentPage(nextPage(todos, currentPage));
  }

  useEffect(() => {
    setTodos(searchAndFilter(tasks, filter));
  }, [tasks, filter, currentPage]);

  return (
    <>
      {isTasksAvailable && <NoTaskPlaceholder />}
      <div className="task_container">
        {isAddingTask && <AddTask />}
        {paginate(todos, currentPage).map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
      {isPaginationAvailable && (
        <Button onClick={loadMore}>{paginationLabel(todos, currentPage)}</Button>
      )}
    </>
  );
}
