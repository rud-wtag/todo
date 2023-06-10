import TaskCard from 'components/ui/TaskCard';
import PropTypes from 'prop-types';

export default function Task({ task }) {
  const { title, createdAt } = task;
  return <TaskCard details={title} createdAt={createdAt} />;
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    createdAt: PropTypes.string
  })
};

Task.defaultProps = {
  task: {
    title: '',
    createdAt: ''
  }
};
