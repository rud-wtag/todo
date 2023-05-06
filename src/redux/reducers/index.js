import { combineReducers } from 'redux';
import { filterReducer } from 'redux/reducers/FilterReducer';
import { todoReducer } from 'redux/reducers/TodoReducer';
import { searchReducer } from './SearchReducer';

const reducer = combineReducers({
  todoStates: todoReducer,
  filterStates: filterReducer,
  searchStates: searchReducer
});

export default reducer;
