import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';
import Toast from 'components/ui/Toast';

function Home() {
  return (
    <div className="home">
      <Heading />
      <Toast />
      <BottomNav />
      <TaskContainer />
    </div>
  );
}

export default Home;
