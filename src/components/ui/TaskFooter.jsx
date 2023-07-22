import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTodo, setEditMode, setTodoComplete, toast } from 'redux/actions/TodoAction';
import { daysBetweenDate } from 'utils/helpers';

export default function TaskFooter({ completedAt = null, createdAt, taskId }) {
  const dispatch = useDispatch();

  function onDelete(event) {
    event.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
    dispatch(toast({ type: 'danger', message: 'Task deleted' }));
  }

  function onComplete(event) {
    event.preventDefault();
    dispatch(setTodoComplete(taskId));
    dispatch(toast({ type: 'success', message: 'Task completed successfully' }));
  }

  function onEdit(event) {
    event.preventDefault();
    dispatch(setEditMode({ taskId: taskId, isEditMode: true }));
  }

  return (
    <div className="task__footer">
      <div className="task__footer-left">
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
