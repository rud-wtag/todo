import React from 'react';
import Button from './ui/Button';

function FilterButtons() {
  return (
    <>
      <Button className="bottom_nav__right__btn">All</Button>
      <Button className="bottom_nav__right__btn">Incomplete</Button>
      <Button className="bottom_nav__right__btn">Complete</Button>
    </>
  );
}

export default FilterButtons;
