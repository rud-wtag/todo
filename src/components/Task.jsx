import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';
import { getFormattedDate } from 'utils/helpers';

function Task({ task }) {
  const { id, title, createdAt, isCompleted } = task;

  return (
    <div className="task">
      <div
        className={classNames('task__title', {
          'task__title--completed': isCompleted
        })}
      >
        {title}
      </div>
      <p className="task__created">Created At: {getFormattedDate(createdAt)}</p>
      <TaskFooter isCompleted={isCompleted} taskId={id} />
    </div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    isCompleted: PropTypes.bool,
    id: PropTypes.string.isRequired
  })
};

Task.defaultProps = {
  task: {
    isCompleted: false
  }
};
