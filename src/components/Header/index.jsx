import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        {
            path: "/home",
            display: "Home",
        },
        {
            path: "/service",
            display: "Service",
        },
        {
            path: "/authentication",
            display: "Sign in",
        },
    ];

    return (
        <div className="menu">
            {navLinks.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                >
                    {item.display}
                </NavLink>
            ))}
        </div>
    )
}

export default Header