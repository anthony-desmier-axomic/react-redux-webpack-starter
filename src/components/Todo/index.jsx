import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles';

const Todo = ({ onClick, completed, text }) => (
    <div className={Styles.root} onClick={onClick}>
        <span>{text}</span>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo;
