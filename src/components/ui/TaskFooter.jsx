import React from 'react';
import propTypes from 'prop-types';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import Button from 'components/ui/Button';
import { deleteTodo, setTOComplete, setEditing } from 'redux/actions/TodoAction';
import { useDispatch } from 'react-redux';
export default function TaskFooter({ completedAt = null, taskId }) {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(taskId));
  };

  const completeHandler = (e) => {
    e.preventDefault();
    dispatch(setTOComplete(taskId));
  };

  const setEdit = (e) => {
    e.preventDefault();
    dispatch(setEditing({ taskId: taskId, editing: true }));
  };

  return (
    <div className="task__footer">
      <div className="task__footer__left">
        {!completedAt && (
          <>
            <Button onClick={completeHandler}>
              <DoneIcon />
            </Button>
            <Button onClick={setEdit}>
              <EditIcon />
            </Button>
          </>
        )}
        <Button onClick={deleteHandler}>
          <DeleteIcon />
        </Button>
      </div>
      {completedAt && <div className="task__footer__right">completed in: {completedAt}</div>}
    </div>
  );
}

TaskFooter.propTypes = {
  completedAt: propTypes.string,
  taskId: propTypes.number
};
