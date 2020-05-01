import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import Styles from './styles';

const App = () => (
    <div className={Styles.root}>
        <h2>Simple Todo App</h2>
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </div>
);

export default App;
