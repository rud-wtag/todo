import TaskCard from 'components/ui/TaskCard';
import PropTypes from 'prop-types';

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
