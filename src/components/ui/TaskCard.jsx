import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';

function TaskCard({ title = '', createdAt = '', isCompleted = false }) {
  const taskCardClasses = classNames('task__title', {
    'task__title--completed': isCompleted
  });

  return (
    <div className="task">
      <div className={taskCardClasses}>{title}</div>
      <p className="task__created">Created At: {createdAt}</p>
      <TaskFooter isCompleted={isCompleted} />
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  isCompleted: PropTypes.bool
};
