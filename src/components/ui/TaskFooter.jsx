import React from 'react';
import propTypes from 'prop-types';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import Button from 'components/ui/Button';
import { deleteTodo } from 'redux/actions/TodoAction';
import { useDispatch } from 'react-redux';
export default function TaskFooter({ isCompleted = false, taskId }) {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    alert('Task will removed!');
    dispatch(deleteTodo(taskId));
  };

  return (
    <div className="task__footer">
      <div className="task__footer__left">
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
        <Button onClick={deleteHandler}>
          <DeleteIcon />
        </Button>
      </div>
      {isCompleted && <div className="task__footer__right">completed in</div>}
    </div>
  );
}

TaskFooter.propTypes = {
  isCompleted: propTypes.bool,
  taskId: propTypes.number
};
