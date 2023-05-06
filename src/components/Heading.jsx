import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { useDispatch } from 'react-redux';
import { setSearch } from 'redux/actions/SearchAction';

export default function Heading() {
  const dispatch = useDispatch();
  function onSearch(event) {
    event.preventDefault();
    dispatch(setSearch(event.target.value));
  }
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__brand">Todo</div>
      </div>
      <div className="header__right">
        <input onChange={onSearch} type="text" className="header__input" />
        <SearchIcon />
      </div>
    </div>
  );
}
