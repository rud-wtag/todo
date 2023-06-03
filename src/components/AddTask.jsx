import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import Button from 'components/ui/Button';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, setIsAddingTask } from 'redux/actions/TodoAction';
import { KEY_ENTER, RESPONSE_ERROR } from 'utils/constants';
import { validate } from 'utils/helpers/index';

function AddTask() {
  const [error, setError] = useState(null);
  const [taskDetails, setTaskDetails] = useState('');
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  function onSubmit(event) {
    event.preventDefault();
    const validateDetails = validate(taskDetails);

    if (validateDetails.status === RESPONSE_ERROR) {
      setError(validateDetails.message);
      return;
    }

    setError(null);
    dispatch(addTodo(validateDetails.text));
    dispatch(setIsAddingTask(false));
    setTaskDetails('');
  }

  function onInputChange(event) {
    setTaskDetails(event.target.value);
  }

  function onCancel(event) {
    event.preventDefault();
    dispatch(setIsAddingTask(false));
  }

  function onKeyDown(event) {
    if (event.key === KEY_ENTER) {
      onSubmit(event);
    }
  }

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <div className="task">
      <form onSubmit={onSubmit}>
        <textarea
          className="task__input"
          ref={textAreaRef}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          required
          value={taskDetails}
        />
        {error && <span>{error}</span>}
        <div className="task__footer">
          <Button>Add Task</Button>
          <Button onClick={onCancel}>
            <DeleteIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
