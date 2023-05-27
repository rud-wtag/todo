import { ReactComponent as AddIcon } from 'assets/add.svg';
import FilterButtons from 'components/FilterButtons';
import Button from 'components/ui/Button';
import { useDispatch } from 'react-redux';
import { setIsAddingTask } from 'redux/actions/TodoAction';

function BottomNav() {
  const dispatch = useDispatch();

  function onAdding(e) {
    e.preventDefault();
    dispatch(setIsAddingTask(true));
  }

  return (
    <div className="bottom_nav__wrapper container">
      <h1>Add Task</h1>
      <div className="bottom_nav">
        <div className="bottom_nav__left">
          <Button variant="secondary" onClick={onAdding} className="bottom_nav__add_btn">
            <AddIcon /> create
          </Button>
        </div>
        <div className="bottom_nav__right">
          <FilterButtons />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
