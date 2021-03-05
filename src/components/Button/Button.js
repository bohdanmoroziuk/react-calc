import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import { classnames } from '../../tools/tools';

const isOperator = value => !isNaN(value) || value === '.' || value === '=';

const Button = ({ name, classNames, handleClick }) => (
    <button 
        className={`${
            classnames('button', ...classNames)
        } ${
            isOperator(name) ? 'button--type-key' : 'button--type-operator'
        }`} 
        onClick={handleClick}
    >
        {name}
    </button>
);

Button.defaultProps = {
    classNames: ['']
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string),
    handleClick: PropTypes.func.isRequired
};

export default Button;