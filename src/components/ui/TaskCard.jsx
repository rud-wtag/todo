import React from 'react';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import PropTypes from 'prop-types';

function TaskCard({ details, createdAt }) {
  return (
    <div className="task">
      <div className="Task__details">{details}</div>
      <p className="task__created">Created At: {createdAt}</p>
      <div className="task__footer">
        <DoneIcon />
        <EditIcon />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  details: PropTypes.string,
  createdAt: PropTypes.string
};
