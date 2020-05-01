import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

import Styles from './styles';

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className={Styles.root}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={(node) => (input = node)} />
                <button className={Styles.button} type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
