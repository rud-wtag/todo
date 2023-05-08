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

  function onDelete(e) {
    e.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
    dispatch(toast({ type: 'danger', message: 'Task deleted successfully' }));
  }

  function onComplete(e) {
    e.preventDefault();
    dispatch(setTOComplete(taskId));
    dispatch(toast({ type: 'success', message: 'Task completed successfully' }));
  }

  function onEdit(e) {
    e.preventDefault();
    dispatch(setEditing({ taskId: taskId, editing: true }));
  }

  return (
    <div className="task__footer">
      <div className="task__footer__left">
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
        <div className="task__footer__right">completed in: {daysBetweenDate(completedAt)}days</div>
      )}
    </div>
  );
}

TaskFooter.propTypes = {
  completedAt: propTypes.string,
  taskId: propTypes.number
};
