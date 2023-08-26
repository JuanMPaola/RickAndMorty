import React from 'react'
import SearchBar from './SearchBar.jsx'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = (props) => {
  const { onSearch } = props;

  const location = useLocation();

  if(location.pathname === '/') return null

  return (
    <div className='nav'>

      <NavLink to='/About'>About</NavLink>

      <NavLink to='/home'>Home</NavLink>

      <SearchBar onSearch={onSearch} />

    </div>
  )
}

export default Nav

