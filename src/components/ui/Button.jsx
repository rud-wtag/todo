import React from 'react';
import propTypes from 'prop-types';
function Button({ icon, onClick }) {
  return <button onClick={onClick}>{icon}</button>;
}

export default Button;

Button.propTypes = { icon: propTypes.bool, onClick: propTypes.func };
