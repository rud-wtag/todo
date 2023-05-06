import { actionTypes } from 'redux/constants/ActionTypes';
import {
  completeTask,
  deleteTask,
  editTask,
  nextPage,
  setEditMode
} from 'utils/helpers/ReducerHelper';
const {
  ADD_TODO,
  SET_ADD_TASK,
  DELETE_TODO,
  COMPLETE_TASK,
  SET_EDIT,
  EDIT_TODO,
  NEXT_PAGE,
  TOAST_MESSAGE
} = actionTypes;

const initialState = {
  isAddingTask: false,
  todos: [
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: '64a9d4cd-d5e9-4990-978a-ea78feb25186',
      taskDetails: 'hghghggg'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'f9267c4d-bfd7-414b-a41b-2bde8f509ac4',
      taskDetails: 'ppopwew'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'd7427859-e947-4ba0-a3d9-7f74fc801a37',
      taskDetails: 'lllkaddsa'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: '82eb5d92-f561-49db-8a38-879c1bfe8f6f',
      taskDetails: 'wpoqowp'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'ac3b0de7-cb51-4977-aa70-3c55a4cd9ba4',
      taskDetails: 'xcnmnmvcx'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: '7d53553d-3bba-46eb-8aee-d757a06e79e2',
      taskDetails: 'weiuriwuir'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'fb9b2758-04c5-45eb-a66f-62b0cfac7d4d',
      taskDetails: 'sdfkds'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'e1f5aa85-dc7a-4486-8d4d-edc09129e352',
      taskDetails: 'kjlllkl'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'b7603fde-72a2-4146-b0a4-a9e7a59bc726',
      taskDetails: 'sdfsdf'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'af7859a2-c2e7-4f80-8c18-fbca45023524',
      taskDetails: 'sdfsdf'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: 'c5b554db-80d0-4721-8903-346e2b64dd46',
      taskDetails: 'sdfdsf'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: '9e34c9d4-d46b-414d-a2bb-cc483aaa07a3',
      taskDetails: 'sfsdsfds'
    },
    {
      completedAt: null,
      editing: false,
      createdAt: '04.05.2023',
      id: '2b80b3d2-417d-4f91-abd4-eb96686788ef',
      taskDetails: 'sdfds'
    }
  ],
  currentPage: 1,
  toast: {
    type: 'success',
    message: null
  }
};

export const todoReducer = (state = initialState, action) => {
  let newList;
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [{ ...action.payload }, ...state.todos]
      };
    case EDIT_TODO:
      newList = editTask(state.todos, action.payload);
      return { ...state, todos: newList };
    case SET_ADD_TASK:
      return {
        ...state,
        isAddingTask: action.payload
      };
    case DELETE_TODO:
      newList = deleteTask(state.todos, action.payload);
      return {
        ...state,
        todos: newList
      };
    case COMPLETE_TASK:
      newList = completeTask(state.todos, action.payload);
      return { ...state, todos: newList };
    case SET_EDIT:
      newList = setEditMode(state.todos, action.payload);
      return { ...state, todos: newList };
    case NEXT_PAGE:
      return { ...state, currentPage: nextPage(state) };
    case TOAST_MESSAGE:
      return { ...state, toast: action.payload };
    default:
      return state;
  }
};
