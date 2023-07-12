import classNames from 'classnames';
import EditTask from 'components/EditTask';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';
import { getFormattedDate } from 'utils/helpers';

function Task({ task }) {
  const { id, taskDetails, createdAt, completedAt, isEditMode } = task;

  const taskDetailsClasses = classNames({
    task__details: true,
    'task__details--completed': completedAt,
    'text-strike': completedAt
  });

  return (
    <>
      {isEditMode ? (
        <EditTask task={task} />
      ) : (
        <div className="task">
          <div className={taskDetailsClasses}>{taskDetails}</div>
          <p className="task__created">Created At: {getFormattedDate(createdAt)}</p>
          <TaskFooter
            completedAt={completedAt}
            isEditMode={isEditMode}
            createdAt={createdAt}
            taskId={id}
          />
        </div>
      )}
    </>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    taskDetails: PropTypes.string.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    completedAt: PropTypes.instanceOf(Date)
  })
};

Task.defaultProps = {
  task: {
    completedAt: null,
    isEditMode: false
  }
};
