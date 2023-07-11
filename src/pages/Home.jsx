import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Heading />
        <BottomNav />
        <TaskContainer />
      </div>
    </div>
  );
}

export default Home;
