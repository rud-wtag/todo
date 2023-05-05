import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTodo, setTOComplete } from 'redux/actions/TodoAction';
import { daysBetweenDate } from 'utils/helpers';

export default function TaskFooter({ completedAt = null, taskId }) {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
  };

  const completeHandler = (e) => {
    e.preventDefault();
    dispatch(setTOComplete(taskId));
  };

  return (
    <div className="task__footer">
      <div className="task__footer__left">
        {!completedAt && (
          <>
            <Button onClick={completeHandler}>
              <DoneIcon />
            </Button>
            <Button>
              <EditIcon />
            </Button>
          </>
        )}
        <Button onClick={deleteHandler}>
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
