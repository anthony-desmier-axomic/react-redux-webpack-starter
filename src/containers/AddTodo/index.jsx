import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import Button from '../../components/Button';

import Styles from './styles';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };

    clickHandler = (e) => {
        const { addTodo } = this.props;
        let value = this.input.current.value;

        if (!value.trim()) return;

        addTodo(value);
        this.input.current.value = '';
    };

    render() {
        return (
            <div className={Styles.root}>
                <div>
                    <input ref={this.input} />
                    <Button text={'Add Todo'} onClick={this.clickHandler} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (value) => dispatch(addTodo(value)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
