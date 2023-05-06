import TaskForm from 'components/TaskForm';
import { useDispatch } from 'react-redux';
import { addTodo, toast } from 'redux/actions/TodoAction';

function AddTask() {
  const dispatch = useDispatch();

  const submitTask = (taskDetails) => {
    dispatch(addTodo(taskDetails));
    dispatch(toast({ type: 'success', message: 'Task added successfully' }));
  };

  return (
    <>
      <TaskForm submitTask={submitTask} />
    </>
  );
}

export default AddTask;
