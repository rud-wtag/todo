import React, { useState } from 'react';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { useDispatch } from 'react-redux';
import { addTodo, setIsAddingTask } from 'redux/actions/TodoAction';
import { ENTER } from 'utils/constants';
import { sanitize } from '../utils/helpers/index';

function AddTask() {
  const [taskDetails, setTaskDetails] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(sanitize(taskDetails)));
    dispatch(setIsAddingTask(false));
    setTaskDetails('');
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
        <div className="task__footer">
          <button type="submit">Add task</button>
          <DeleteIcon />
        </div>
      </form>
    </div>
  );
}

export default AddTask;
