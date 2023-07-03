import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEditing, setIsAddingTask, setTOComplete } from 'redux/actions/TodoAction';
import { KEY_ENTER, RESPONSE_ERROR } from 'utils/constants';
import { validate } from 'utils/helpers/index';

function TaskForm({ isEditing = false, task, submitTask }) {
  const [error, setError] = useState(null);
  const [taskDetails, setTaskDetails] = useState(task?.taskDetails);
  const dispatch = useDispatch();
  const textAreaRef = useRef(null);

  function onSubmit(event) {
    event.preventDefault();
    const validateDetails = validate(taskDetails);

    if (validateDetails.status === RESPONSE_ERROR) {
      setError(validateDetails.message);
    } else {
      setError(null);
      submitTask(validateDetails.text);
      dispatch(setIsAddingTask(false));
      setTaskDetails('');
    }
  }

  function onKeyDown(event) {
    if (event.key === KEY_ENTER) {
      onSubmit(event);
    }
  }

  function onCancel(event) {
    event.preventDefault();
    dispatch(setIsAddingTask(false));
  }

  function onInputChange(event) {
    event.preventDefault();
    setTaskDetails(event.target.value);
  }

  function onComplete(event) {
    event.preventDefault();
    onSubmit(event);
    dispatch(setEditing({ taskId: task.id, editing: false }));
    dispatch(setTOComplete(task.id));
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
          <div className="task__footer__left">
            {isEditing ? (
              <>
                <Button>Save</Button>
                <Button onClick={onComplete}>
                  <DoneIcon />
                </Button>
              </>
            ) : (
              <Button>Add Task</Button>
            )}
            <Button onClick={onCancel}>
              <DeleteIcon />
            </Button>
          </div>
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
