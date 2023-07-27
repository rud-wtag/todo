import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';
import ToastContainer from 'components/ToastContainer';

function Home() {
  return (
    <div className="home">
      <ToastContainer />
      <div className="container">
        <Heading />
        <BottomNav />
        <TaskContainer />
      </div>
    </div>
  );
}

export default Home;
