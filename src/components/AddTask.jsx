import React, { useState } from 'react';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { useDispatch } from 'react-redux';
import { addTodo, setIsAddingTask } from 'redux/actions/TodoAction';
import { ENTER } from 'utils/constants';
import { validate } from 'utils/helpers/index';

function AddTask() {
  const [error, setError] = useState(null);
  const [taskDetails, setTaskDetails] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateDetails = validate(taskDetails);
    if (validateDetails.status === 'error') {
      setError(validateDetails.message);
    } else {
      setError(null);
      dispatch(addTodo(validateDetails.text));
      dispatch(setIsAddingTask(false));
      setTaskDetails(null);
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

  return (
    <div className="task">
      <form onSubmit={handleSubmit}>
        <textarea
          className="task__input"
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
