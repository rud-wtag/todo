import Button from 'components/ui/Button';
import { LABEL_ALL, LABEL_COMPLETE, LABEL_INCOMPLETE } from 'utils/constants';

function FilterButtons() {
  const actionButtons = [
    { label: LABEL_ALL },
    { label: LABEL_COMPLETE },
    { label: LABEL_INCOMPLETE }
  ];

  return (
    <>
      {actionButtons.map((button) => {
        return (
          <Button key={button.label} className="bottom_nav__right-btn">
            {button.label}
          </Button>
        );
      })}
    </>
  );
}

export default FilterButtons;
