import React from 'react';

export default class Button extends React.Component {
    clickHandler = (e) => {
        const { onClick } = this.props;
        onClick(e);
    };

    render() {
        const { text, type, onClick } = this.props;
        return (
            <button className={Styles.button} onClick={this.clickHandler}>
                Add Todo
            </button>
        );
    }
}
