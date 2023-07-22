import classNames from 'classnames';
import PropTypes from 'prop-types';
import TaskFooter from 'components/ui/TaskFooter';
import { getFormattedDate } from 'utils/helpers';

function TaskCard({ title = '', createdAt, isCompleted = false }) {
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
      <TaskFooter isCompleted={isCompleted} />
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  isCompleted: PropTypes.bool
};
