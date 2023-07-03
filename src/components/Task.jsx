import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';

function Task({ task }) {
  const { id, taskDetails, createdAt, completedAt } = task;

  const taskDetailsClasses = classNames({
    task__details: true,
    'task__details--completed': completedAt,
    'text-strike': completedAt
  });

  return (
    <div className="task">
      <div className={taskDetailsClasses}>{taskDetails}</div>
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
    completedAt: PropTypes.instanceOf(Date),
    id: PropTypes.string.isRequired
  })
};

Task.defaultProps = {
  task: {
    taskDetails: '',
    createdAt: null,
    completedAt: null
  }
};
