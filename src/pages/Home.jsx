import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';

function Home() {
  return (
    <div className="home">
      <Heading />
      <BottomNav />
      <TaskContainer />
    </div>
  );
}

export default Home;
