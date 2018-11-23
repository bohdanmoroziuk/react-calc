import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

const TextInput = ({ value, ...restProps }) => (
    <input className="input" type="text" value={value} {...restProps} />
);

TextInput.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default TextInput;