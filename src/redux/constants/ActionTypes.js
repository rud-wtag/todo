export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  EDIT_TODO: 'EDIT_TOD',
  DELETE_TODO: 'DELETE_TODO',
  SET_ADD_TASK: 'SET_ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  SET_EDIT: 'SET_EDIT',
  NEXT_PAGE: 'NEXT_PAGE',
  TOAST_MESSAGE: 'TOAST_MESSAGE'
};

export const paginationActionTypes = {
  LOAD_MORE: 'LOAD_MORE',
  PAGINATION_RESET: 'RESET_PAGINATION'
};

export const filterActionTypes = {
  SET_FILTER: 'SET_FILTER',
  ALL: 'All',
  INCOMPLETE: 'Incomplete',
  COMPLETE: 'Complete'
};

export const searchActionTypes = {
  SET_SEARCH: 'SET_SEARCH'
};
