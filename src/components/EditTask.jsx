import TaskForm from 'components/TaskForm';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editTodo, setEditMode } from 'redux/actions/TodoAction';

function EditTask({ task }) {
  const dispatch = useDispatch();

  function onSubmit(taskDetails) {
    dispatch(editTodo({ taskId: task.id, taskDetails: taskDetails }));
    dispatch(setEditMode({ taskId: task.id, isEditMode: false }));
  }

  return (
    <div>
      <TaskForm isEditing={true} task={task} submitTask={onSubmit} />
    </div>
  );
}

export default EditTask;

EditTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskDetails: PropTypes.string,
    isEditMode: PropTypes.boolean,
    createdAt: PropTypes.string,
    completedAt: PropTypes.string
  })
};

EditTask.defaultProps = {
  task: {
    id: null,
    taskDetails: '',
    isEditMode: false,
    createdAt: null,
    completedAt: null
  }
};
