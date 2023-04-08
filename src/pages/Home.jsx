import React from 'react';
import Heading from 'components/Heading';
import TaskContainer from 'components/TaskContainer';
import BottomNav from 'components/BottomNav';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Heading />
        <BottomNav />
        <TaskContainer />
      </div>
    </div>
  );
}

export default Home;
