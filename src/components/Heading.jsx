import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { setSearch } from 'redux/actions/SearchAction';
import Button from 'components/ui/Button';

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
  }

  function onSearchClick(event) {
    event.preventDefault();
    setInputHidden(!inputHidden);
  }

  useEffect(() => {
    const trigger = setTimeout(() => {
      dispatch(setSearch(query));
    }, 1000);
    return () => clearTimeout(trigger);
  }, [query]);

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__brand">Todo</div>
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
