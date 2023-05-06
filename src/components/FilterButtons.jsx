import Button from 'components/ui/Button';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions/FilterAction';
import { LABEL_ALL, LABEL_COMPLETE, LABEL_INCOMPLETE } from 'utils/constants';

function FilterButtons() {
  const dispatch = useDispatch();
  const filterButtons = [
    { label: LABEL_ALL },
    { label: LABEL_COMPLETE },
    { label: LABEL_INCOMPLETE }
  ];
  function onFilter(event, label) {
    console.log(label);
    event.preventDefault();
    dispatch(setFilter(label));
  }
  return (
    <>
      {filterButtons.map((button) => {
        return (
          <Button
            onClick={(event) => onFilter(event, button.label)}
            key={button.label}
            className="bottom_nav__right__btn"
          >
            {button.label}
          </Button>
        );
      })}
    </>
  );
}

export default FilterButtons;
