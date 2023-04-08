import React from 'react';
import PropTypes from 'prop-types';
import TaskFooter from 'components/ui/TaskFooter';

function TaskCard({ details, createdAt, isCompleted = false }) {
  const completedClasses = isCompleted ? 'completed' : '';
  return (
    <div className="task">
      <div className={`Task__details--${completedClasses}`}>{details}</div>
      <p className="task__created">Created At: {createdAt}</p>
      <TaskFooter isCompleted={isCompleted} />
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  details: PropTypes.string,
  createdAt: PropTypes.string,
  isCompleted: PropTypes.bool
};
