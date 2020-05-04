import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Link = ({ active, text, onClick }) => (
    <Button text={text} onClick={onClick} disabled={active} />
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Link;
