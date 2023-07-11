import { ReactComponent as AddIcon } from 'assets/add.svg';
import FilterButtons from 'components/FilterButtons';
import Button from 'components/ui/Button';
import { useDispatch } from 'react-redux';
import { setIsNewTaskRequested } from 'redux/actions/TodoAction';

function BottomNav() {
  const dispatch = useDispatch();

  function setIsAdding(event) {
    event.preventDefault();
    dispatch(setIsNewTaskRequested(true));
  }

  return (
    <>
      <h1>Add Task</h1>
      <div className="bottom_nav">
        <div className="bottom_nav__left">
          <Button onClick={setIsAdding} className="bottom_nav__add_btn">
            <AddIcon /> create
          </Button>
        </div>
        <div className="bottom_nav__right">
          <FilterButtons />
        </div>
      </div>
    </>
  );
}

export default BottomNav;
