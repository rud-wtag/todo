import TaskForm from 'components/TaskForm';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editTodo, setEditMode } from 'redux/actions/TodoAction';

function EditTask({ task }) {
  const dispatch = useDispatch();

  function onSubmit(title) {
    dispatch(editTodo({ taskId: task.id, title }));
    dispatch(setEditMode({ taskId: task.id, isEditMode: false }));
  }

  return (
    <div>
      <TaskForm isEditMode={true} task={task} submitTask={onSubmit} />
    </div>
  );
}

export default EditTask;

EditTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    isEditMode: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date),
    completedAt: PropTypes.instanceOf(Date)
  })
};

EditTask.defaultProps = {
  task: {
    id: null,
    title: '',
    isEditMode: false,
    createdAt: null,
    completedAt: null
  }
};
