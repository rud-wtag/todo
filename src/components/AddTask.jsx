import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/actions/TodoAction';
import TaskForm from 'components/TaskForm';

function AddTask() {
  const dispatch = useDispatch();

  const submitTask = (taskDetails) => {
    dispatch(addTodo(taskDetails));
  };

  return (
    <>
      <TaskForm submitTask={submitTask} />
    </>
  );
}

export default AddTask;
