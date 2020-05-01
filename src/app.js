import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './styles';

const template = <p className={Styles.red}>Hello from react</p>;

ReactDOM.render(template, document.getElementById('root'));
