import { ReactComponent as AddTaskSVG } from 'assets/create.svg';
import { useDispatch } from 'react-redux';
import { setIsAddingTask } from 'redux/actions/TodoAction';

function NoTaskPlaceholder() {
  const dispatch = useDispatch();
  const handleIsAddingTask = () => {
    dispatch(setIsAddingTask(true));
  };

  return (
    <div className="no_task">
      <div onClick={handleIsAddingTask} className="no_task__svg">
        <AddTaskSVG />
      </div>
      <p className="no_task__text">You didn’t add any task. Please, add one.</p>
    </div>
  );
}

export default NoTaskPlaceholder;
