import TaskForm from 'components/TaskForm';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/actions/TodoAction';

function AddTask() {
  const dispatch = useDispatch();

  const onSubmit = (taskDetails) => {
    dispatch(addTodo(taskDetails));
  };

  return (
    <>
      <TaskForm submitTask={onSubmit} />
    </>
  );
}

export default AddTask;
