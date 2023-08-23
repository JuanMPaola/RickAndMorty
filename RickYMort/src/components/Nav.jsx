import React from 'react'
import SearchBar from './SearchBar.jsx'
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const Nav = (props) => {
  const { onSearch } = props;
  return (
    <div className='nav'>

      <NavLink to='/About'>About</NavLink>

      <NavLink to='/home'>Home</NavLink>

      <SearchBar onSearch={onSearch} />

    </div>
  )
}

export default Nav

