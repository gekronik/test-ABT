import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/">
            <button>Select</button>
            </NavLink >
            <NavLink to="/tasks">
            <button>Tasks</button>
            </NavLink>
        </div>
    );
};

export default Header;