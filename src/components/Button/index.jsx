import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles';

export default class Button extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    static defaultProps = { disabled: false };

    clickHandler = (e) => {
        const { onClick } = this.props;
        onClick(e);
    };

    render() {
        const { text, disabled } = this.props;
        return (
            <button
                className={Styles.root}
                onClick={this.clickHandler}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }
}
