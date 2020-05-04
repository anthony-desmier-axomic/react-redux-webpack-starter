import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { VisibilityFilters } from '../../actions';

import Styles from './styles';

const Footer = () => (
    <div className={Styles.root}>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL} text={'All'} />
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} text={'Active'} />
        <FilterLink
            filter={VisibilityFilters.SHOW_COMPLETED}
            text={'Completed'}
        />
    </div>
);

export default Footer;
