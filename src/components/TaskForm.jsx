import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { useDispatch } from 'react-redux';
import { setEditing, setIsAddingTask, setTOComplete } from 'redux/actions/TodoAction';
import { ENTER, ERROR } from 'utils/constants';
import { validate } from 'utils/helpers/index';
import Button from 'components/ui/Button';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import PropTypes from 'prop-types';
function TaskForm({ isEditing = false, task, submitTask }) {
  const [error, setError] = useState(null);
  const [taskDetails, setTaskDetails] = useState(task?.taskDetails);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateDetails = validate(taskDetails);

    if (validateDetails.status === ERROR) {
      setError(validateDetails.message);
    } else {
      setError(null);
      submitTask(validateDetails.text);
      dispatch(setIsAddingTask(false));
      setTaskDetails('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === ENTER) {
      handleSubmit(e);
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    dispatch(setIsAddingTask(false));
  };

  const completeHandler = (e) => {
    e.preventDefault();
    handleSubmit(e);
    dispatch(setEditing({ taskId: task.id, editing: false }));
    dispatch(setTOComplete(task.id));
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
          {isEditing ? (
            <>
              <Button>Save</Button>
              <Button onClick={completeHandler}>
                <DoneIcon />
              </Button>
            </>
          ) : (
            <Button>Add Task</Button>
          )}
          <Button onClick={cancel}>
            <DeleteIcon />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;

TaskForm.propTypes = {
  task: PropTypes.shape({
    taskDetails: PropTypes.string,
    createdAt: PropTypes.string,
    completedAt: PropTypes.string,
    id: PropTypes.number.isRequired,
    editing: PropTypes.boolean
  }),
  isEditing: PropTypes.boolean,
  submitTask: PropTypes.func.isRequired
};

TaskForm.defaultProps = {
  task: {
    taskDetails: '',
    createdAt: null,
    completedAt: null,
    editing: false
  }
};
