import Button from 'components/ui/Button';
import { LABEL_ALL, LABEL_COMPLETE, LABEL_INCOMPLETE } from 'utils/constants';

function FilterButtons() {
  const filterButtons = [
    { label: LABEL_ALL },
    { label: LABEL_COMPLETE },
    { label: LABEL_INCOMPLETE }
  ];

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
