import { searchActionTypes } from '../constants/ActionTypes';
const { SET_SEARCH } = searchActionTypes;

const initialState = {
  query: null
};

export const searchReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
};
