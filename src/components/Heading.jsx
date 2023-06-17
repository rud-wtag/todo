import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import classNames from 'classnames';
import Button from 'components/ui/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch, setSearching } from 'redux/actions/SearchAction';

export default function Heading() {
  const [inputHidden, setInputHidden] = useState(true);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const inputClasses = classNames({
    header__input: true,
    'header__input--hidden': inputHidden
  });

  function onSearch(event) {
    event.preventDefault();
    setQuery(event.target.value);
    dispatch(setSearching(true));
  }

  function onSearchClick(event) {
    event.preventDefault();
    setInputHidden(!inputHidden);
  }

  useEffect(() => {
    const trigger = setTimeout(() => {
      dispatch(setSearch(query));
      dispatch(setSearching(false));
    }, 1000);
    return () => clearTimeout(trigger);
  }, [query]);

  return (
    <div className="header container">
      <div className="header__left">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__brand">Todos</div>
      </div>
      <div className="header__right">
        <input onChange={onSearch} type="text" className={inputClasses} />
        <Button variant="icon" onClick={onSearchClick}>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}
