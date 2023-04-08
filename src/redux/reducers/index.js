import { combineReducers } from 'redux';
import { todoReducer } from './TodoReducer';

const reducer = combineReducers({
  todoStates: todoReducer
});

export default reducer;
