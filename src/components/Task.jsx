import classNames from 'classnames';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';
import { getFormattedDate } from 'utils/helpers';

function Task({ task }) {
  const { id, title, createdAt, completedAt } = task;

  return (
    <div className="task">
      <div
        className={classNames('task__title', {
          'task__title--completed': completedAt
        })}
      >
        {title}
      </div>
      <p className="task__created">Created At: {getFormattedDate(createdAt)}</p>
      <TaskFooter completedAt={completedAt} createdAt={createdAt} taskId={id} />
    </div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    completedAt: PropTypes.instanceOf(Date),
    id: PropTypes.string.isRequired
  })
};

Task.defaultProps = {
  task: {
    title: '',
    completedAt: null
  }
};
