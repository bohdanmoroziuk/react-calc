import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';
import { isOperator } from './utils';

const Button = ({ long, label, onClick }) => (
  <button 
    className={classNames([
      'button',
      isOperator(label) 
        ? 'button--type-key' 
        : 'button--type-operator', {
      'button--long': long,
    }])}
    onClick={onClick}
  >
    {label}
  </button>
);

Button.defaultProps = {
  long: false
};

Button.propTypes = {
  long: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
