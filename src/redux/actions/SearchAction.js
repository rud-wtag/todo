import { searchActionTypes } from 'redux/constants/ActionTypes';

export const setSearch = (query) => {
  return {
    type: searchActionTypes.SET_SEARCH,
    payload: query
  };
};
