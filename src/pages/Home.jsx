import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';
import Toast from 'components/ui/Toast';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Heading />
        <Toast />
        <BottomNav />
        <TaskContainer />
      </div>
    </div>
  );
}

export default Home;
