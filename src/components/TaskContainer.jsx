import React from 'react';
import { useSelector } from 'react-redux';
import Task from 'components/Task';
import AddTask from 'components/AddTask';
import NoTaskPlaceholder from 'components/NoTaskPlaceholder';

export default function TaskContainer() {
  const tasks = useSelector((state) => state.todoStates.todos);
  const isAddingTask = useSelector((state) => state.todoStates.isAddingTask);

  return (
    <>
      {!(tasks.length || isAddingTask) && <NoTaskPlaceholder />}
      <div className="task_container">
        {isAddingTask && <AddTask />}
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </>
  );
}
