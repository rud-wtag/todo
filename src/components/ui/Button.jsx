import React from 'react';
import propTypes from 'prop-types';
function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  className: propTypes.string
};
