import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import Button from 'components/ui/Button';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, setIsAddingTask } from 'redux/actions/TodoAction';
import { KEY_ENTER, RESPONSE_OK } from 'utils/constants';
import { validate } from 'utils/helpers/index';

function AddTask() {
  const [error, setError] = useState(null);
  const [taskDetails, setTaskDetails] = useState('');
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    const validateDetails = validate(taskDetails);

    if (validateDetails.status === RESPONSE_OK) {
      setError(null);
      dispatch(addTodo(validateDetails.text));
      dispatch(setIsAddingTask(false));
      setTaskDetails('');
    }

    setError(validateDetails.message);
  }

  function onTyping(e) {
    setTaskDetails(e.target.value);
  }

  function onCancel(e) {
    e.preventDefault();
    dispatch(setIsAddingTask(false));
  }

  function onKeyDown(e) {
    if (e.key === KEY_ENTER) {
      onSubmit(e);
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
          onChange={onTyping}
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
