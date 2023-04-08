import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsAddingTask } from 'redux/actions/TodoAction';
import FilterButtons from 'components/FilterButtons';
import { ReactComponent as AddIcon } from 'assets/add.svg';
function BottomNav() {
  const dispatch = useDispatch();
  const setIsAdding = (e) => {
    e.preventDefault();
    dispatch(setIsAddingTask(true));
  };
  return (
    <div>
      <h1>Add Task</h1>
      <div className="bottom_nav">
        <div className="bottom_nav__left">
          <button onClick={setIsAdding} className="bottom_nav__add_btn">
            <AddIcon /> create
          </button>
        </div>
        <div className="bottom_nav__right">
          <FilterButtons />
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
