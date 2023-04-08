import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

export default function Heading() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__brand">Todo</div>
      </div>
      <div className="header__right">
        <input type="text" className="header__input" />
        <SearchIcon />
      </div>
    </div>
  );
}
