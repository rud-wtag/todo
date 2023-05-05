import classNames from 'classnames';
import EditTask from 'components/EditTask';
import TaskFooter from 'components/ui/TaskFooter';
import PropTypes from 'prop-types';

function Task({ task }) {
  const { id, taskDetails, createdAt, completedAt, editing } = task;

  const classes = classNames({
    task__details: true,
    'task__details--completed': completedAt,
    'text-strike': completedAt
  });

  return (
    <>
      {editing ? (
        <EditTask task={task} />
      ) : (
        <div className="task">
          <div className={classes}>{taskDetails}</div>
          <p className="task__created">Created At: {createdAt}</p>
          <TaskFooter completedAt={completedAt} isEditing={editing} taskId={id} />
        </div>
      )}
    </>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    taskDetails: PropTypes.string,
    createdAt: PropTypes.string,
    completedAt: PropTypes.string,
    id: PropTypes.number.isRequired,
    editing: PropTypes.boolean
  })
};

Task.defaultProps = {
  task: {
    taskDetails: '',
    createdAt: null,
    completedAt: null,
    editing: false
  }
};
