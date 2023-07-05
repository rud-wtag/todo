import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTodo, setEditing, setTOComplete } from 'redux/actions/TodoAction';
import { daysBetweenDate } from 'utils/helpers';

export default function TaskFooter({ completedAt = null, createdAt, taskId }) {
  const dispatch = useDispatch();

  function onDelete(event) {
    event.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
  }

  function onComplete(event) {
    event.preventDefault();
    dispatch(setTOComplete(taskId));
  }

  function onEdit(event) {
    event.preventDefault();
    dispatch(setEditing({ taskId: taskId, editing: true }));
  }

  return (
    <div className="task__footer">
      <div className="task__footer-left">
        {!completedAt && (
          <>
            <Button onClick={onComplete}>
              <DoneIcon />
            </Button>
            <Button onClick={onEdit}>
              <EditIcon />
            </Button>
          </>
        )}
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </div>
      {completedAt && (
        <div className="task__footer-right">
          completed in: {daysBetweenDate(completedAt, createdAt)}
        </div>
      )}
    </div>
  );
}

TaskFooter.propTypes = {
  completedAt: propTypes.instanceOf(Date),
  taskId: propTypes.string.isRequired,
  createdAt: propTypes.instanceOf(Date).isRequired
};
