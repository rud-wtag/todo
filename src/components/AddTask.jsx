import { useDispatch } from 'react-redux';
import TaskForm from 'components/TaskForm';
import { addTodo, toast } from 'redux/actions/TodoAction';
import { INITIAL_TASK } from 'utils/constants';

function AddTask() {
  const dispatch = useDispatch();

  const onSubmit = (title) => {
    dispatch(addTodo(title));
    dispatch(toast({ type: 'success', message: 'Task added successfully' }));
  };

  return (
    <>
      <TaskForm task={INITIAL_TASK} submitTask={onSubmit} />
    </>
  );
}

export default AddTask;
