import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationElement = props => {
    return(
        <>
            <NavLink to={props.to}>
                <p>{props.title}</p>
            </NavLink>
        </>
    );
}

export default NavigationElement;