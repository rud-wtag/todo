import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';

function TaskCard({ details = '', createdAt = '', isCompleted = false }) {
  const classes = classNames({
    task__details: true,
    'task__details--completed': isCompleted
  });

  return (
    <div className="task">
      <div className={classes}>{details}</div>
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
