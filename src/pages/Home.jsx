import BottomNav from 'components/BottomNav';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';
import Loader from 'components/ui/Loader';
import Toast from 'components/ui/Toast';
import { useSelector } from 'react-redux';

function Home() {
  const isSearching = useSelector((state) => state.searchStates.searching);

  return (
    <div className="home">
      <Heading />
      {isSearching && <Loader />}
      <Toast />
      <BottomNav />
      <TaskContainer />
    </div>
  );
}

export default Home;
