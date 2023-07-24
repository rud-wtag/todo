import { combineReducers } from 'redux';
import { todoReducer } from 'redux/reducers/TodoReducer';

const reducer = combineReducers({
  todoStates: todoReducer
});

export default reducer;
