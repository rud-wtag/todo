import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTodo, setEditing, setTOComplete, toast } from 'redux/actions/TodoAction';
import { daysBetweenDate } from 'utils/helpers';

export default function TaskFooter({ completedAt = null, taskId }) {
  const dispatch = useDispatch();

  function onDelete(event) {
    event.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
    dispatch(toast({ type: 'danger', message: 'Task deleted successfully' }));
  }

  function onComplete(event) {
    event.preventDefault();
    dispatch(setTOComplete(taskId));
    dispatch(toast({ type: 'success', message: 'Task completed successfully' }));
  }

  function onEdit(event) {
    event.preventDefault();
    dispatch(setEditing({ taskId: taskId, editing: true }));
  }

  return (
    <div className="task__footer">
      <div className="task__footer__left">
        {!completedAt && (
          <>
            <Button variant="icon" onClick={onComplete}>
              <DoneIcon />
            </Button>
            <Button variant="icon" onClick={onEdit}>
              <EditIcon />
            </Button>
          </>
        )}
        <Button variant="icon" onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </div>
      {completedAt && (
        <div className="task__footer__right">
          <Button variant="secondary">completed in: {daysBetweenDate(completedAt)}days</Button>
        </div>
      )}
    </div>
  );
}

TaskFooter.propTypes = {
  completedAt: propTypes.string,
  taskId: propTypes.number
};
