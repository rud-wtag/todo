import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import { deleteTodo } from 'redux/actions/TodoAction';

export default function TaskFooter({ isCompleted = false, taskId }) {
  const dispatch = useDispatch();

  function onDelete(event) {
    event.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
  }

  return (
    <div className="task__footer">
      <div className="task__footer-left">
        {!isCompleted && (
          <>
            <Button>
              <DoneIcon />
            </Button>
            <Button>
              <EditIcon />
            </Button>
          </>
        )}
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </div>
      {isCompleted && <div className="task__footer-right">completed in</div>}
    </div>
  );
}

TaskFooter.propTypes = {
  isCompleted: propTypes.bool,
  taskId: propTypes.string.isRequired
};
