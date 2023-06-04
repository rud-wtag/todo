import TaskForm from 'components/TaskForm';
import { useDispatch } from 'react-redux';
import { addTodo, toast } from 'redux/actions/TodoAction';

function AddTask() {
  const dispatch = useDispatch();

  const onSubmit = (taskDetails) => {
    dispatch(addTodo(taskDetails));
    dispatch(toast({ type: 'success', message: 'Task added successfully' }));
  };

  return (
    <>
      <TaskForm submitTask={onSubmit} />
    </>
  );
}

export default AddTask;
