import React from 'react';
import propTypes from 'prop-types';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import Button from 'components/ui/Button';

export default function TaskFooter({ isCompleted = false }) {
  return (
    <div className="task__footer">
      <div className="task__footer__left">
        {!isCompleted && (
          <>
            <Button icon={<DoneIcon />} />
            <Button icon={<EditIcon />} />
          </>
        )}
        <button>
          <DeleteIcon />
        </button>
      </div>
      {isCompleted && <div className="task__footer__right">completed in</div>}
    </div>
  );
}

TaskFooter.propTypes = {
  isCompleted: propTypes.bool
};
