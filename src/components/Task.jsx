import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';

function Task({ task }) {
  const { id, taskDetails, createdAt, completedAt } = task;

  const classes = classNames({
    task__details: true,
    'task__details--completed': completedAt
  });

  return (
    <div className="task">
      <div className={classes}>{taskDetails}</div>
      <p className="task__created">Created At: {createdAt}</p>
      <TaskFooter completedAt={completedAt} taskId={id} />
    </div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    taskDetails: PropTypes.string,
    createdAt: PropTypes.string,
    completedAt: PropTypes.string,
    id: PropTypes.number.isRequired
  })
};

Task.defaultProps = {
  task: {
    taskDetails: '',
    createdAt: null,
    completedAt: null
  }
};
