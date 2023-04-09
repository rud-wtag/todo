import React from 'react';
import TaskCard from 'components/ui/TaskCard';
import PropTypes from 'prop-types';

export default function Task({ task }) {
  const { taskDetails, createdAt } = task;
  return <TaskCard details={taskDetails} createdAt={createdAt} />;
}

Task.propTypes = {
  task: PropTypes.shape({
    taskDetails: PropTypes.string,
    createdAt: PropTypes.string
  })
};
