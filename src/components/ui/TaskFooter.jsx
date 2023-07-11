import { ReactComponent as DeleteIcon } from 'assets/delete.svg';
import { ReactComponent as EditIcon } from 'assets/edit.svg';
import { ReactComponent as DoneIcon } from 'assets/ok.svg';
import Button from 'components/ui/Button';
import propTypes from 'prop-types';

export default function TaskFooter({ isCompleted = false }) {
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
        <Button>
          <DeleteIcon />
        </Button>
      </div>
      {isCompleted && <div className="task__footer-right">completed in</div>}
    </div>
  );
}

TaskFooter.propTypes = {
  isCompleted: propTypes.bool
};
