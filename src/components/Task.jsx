import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';

function Task({ task }) {
  const { id, taskDetails, createdAt, isCompleted } = task;

  const classes = classNames({
    task__details: true,
    'task__details--completed': isCompleted
  });

  return (
    <div className="task">
      <div className={classes}>{taskDetails}</div>
      <p className="task__created">Created At: {createdAt}</p>
      <TaskFooter isCompleted={isCompleted} taskId={id} />
    </div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    taskDetails: PropTypes.string,
    createdAt: PropTypes.string,
    isCompleted: PropTypes.bool,
    id: PropTypes.number.isRequired
  })
};

Task.defaultProps = {
  task: {
    taskDetails: '',
    createdAt: '',
    isCompleted: false
  }
};
