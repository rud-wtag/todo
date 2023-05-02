import React from 'react';
import Button from 'components/ui/Button';

function FilterButtons() {
  const filterButtons = [{ label: 'All' }, { label: 'Incomplete' }, { label: 'Complete' }];

  return (
    <>
      {filterButtons.map((button) => {
        return (
          <Button key={button.label} className="bottom_nav__right__btn">
            {button.label}
          </Button>
        );
      })}
    </>
  );
}

export default FilterButtons;
