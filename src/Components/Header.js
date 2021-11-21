import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo'>
                <h1>CareerZ</h1>
            </div>
            <div className='nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shortlisted'>ShortListed</NavLink>
                <NavLink to='/rejected'>Rejected</NavLink>
            </div>
        </div>
    )
}
export default Header;