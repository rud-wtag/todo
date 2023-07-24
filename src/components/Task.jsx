import PropTypes from 'prop-types';
import TaskCard from 'components/ui/TaskCard';

export default function Task({ task }) {
  const { title, createdAt } = task;
  return <TaskCard title={title} createdAt={createdAt} />;
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired
  })
};
