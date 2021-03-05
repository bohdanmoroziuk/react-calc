import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.css';

const propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string
};

const defaultProps = {
  name: "input"
};

const TextInput = (props) => (
  <input 
    className="text-input" 
    type="text" 
    readOnly
    {...props}
  />
);

TextInput.propTypes = propTypes;

TextInput.defaultProps = defaultProps;

export default TextInput;
