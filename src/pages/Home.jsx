import { useSelector } from 'react-redux';
import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';
import Loader from 'components/ui/Loader';
import ToastContainer from 'components/ToastContainer';

function Home() {
  const isSearching = useSelector((state) => state.searchStates.searching);

  return (
    <div className="home">
      <ToastContainer />
      <Heading />
      {isSearching && <Loader />}
      <BottomNav />
      <TaskContainer />
    </div>
  );
}

export default Home;
