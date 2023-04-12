import React from 'react';
import propTypes from 'prop-types';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import Button from 'components/ui/Button';
import { deleteTodo, setTOComplete } from 'redux/actions/TodoAction';
import { useDispatch } from 'react-redux';
export default function TaskFooter({ isCompleted = null, taskId }) {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(taskId));
  };

  const completeHandler = (e) => {
    e.preventDefault();
    dispatch(setTOComplete(taskId));
  };

  return (
    <div className="task__footer">
      <div className="task__footer__left">
        {!isCompleted && (
          <>
            <Button onClick={completeHandler}>
              <DoneIcon />
            </Button>
            <Button>
              <EditIcon />
            </Button>
          </>
        )}
        <button>
          <DeleteIcon onClick={deleteHandler} />
        </button>
      </div>
      {isCompleted && <div className="task__footer__right">completed in</div>}
    </div>
  );
}

TaskFooter.propTypes = {
  isCompleted: propTypes.bool,
  taskId: propTypes.number
};
