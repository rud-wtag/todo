import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { useDispatch } from 'react-redux';
import { addTodo, setIsAddingTask } from 'redux/actions/TodoAction';
import { ENTER, ERROR } from 'utils/constants';
import { validate } from 'utils/helpers/index';

function AddTask() {
  const [error, setError] = useState(null);
  const [taskDetails, setTaskDetails] = useState('');
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateDetails = validate(taskDetails);
    if (validateDetails.status === ERROR) {
      setError(validateDetails.message);
    } else {
      setError(null);
      dispatch(addTodo(validateDetails.text));
      dispatch(setIsAddingTask(false));
      setTaskDetails('');
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    dispatch(setIsAddingTask(false));
  };

  const handleKeyDown = (e) => {
    if (e.key === ENTER) {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  return (
    <div className="task">
      <form onSubmit={handleSubmit}>
        <textarea
          className="task__input"
          ref={textAreaRef}
          onChange={(e) => setTaskDetails(e.target.value)}
          onKeyDown={handleKeyDown}
          required
          value={taskDetails}
        />
        {error && <span>{error}</span>}
        <div className="task__footer">
          <button type="submit">Add task</button>
          <button onClick={cancel}>
            <DeleteIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
