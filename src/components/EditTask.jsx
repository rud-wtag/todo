import React from 'react';
import TaskForm from './TaskForm';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editTodo, setEditing } from 'redux/actions/TodoAction';
function EditTask({ task }) {
  const dispatch = useDispatch();

  const submitTask = (taskDetails) => {
    dispatch(editTodo({ taskId: task.id, taskDetails: taskDetails }));
    dispatch(setEditing({ taskId: task.id, editing: false }));
  };

  return (
    <div>
      <TaskForm isEditing={true} task={task} submitTask={submitTask} />
    </div>
  );
}

export default EditTask;

EditTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskDetails: PropTypes.string,
    editing: PropTypes.boolean,
    createdAt: PropTypes.string,
    completedAt: PropTypes.string
  })
};

EditTask.defaultProps = {
  task: {
    id: null,
    taskDetails: '',
    editing: false,
    createdAt: null,
    completedAt: null
  }
};
