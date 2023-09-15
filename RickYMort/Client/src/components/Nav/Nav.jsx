import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import style from './Nav.module.css'

const Nav = (props) => {
  const { onSearch } = props;
  const { randomHandler } = props;

  const location = useLocation();

  if (location.pathname === '/') return null

  return (
    <div className={style.conteiner}>

      <NavLink to='/home' >
        <button><span className={style.shadow}></span>
          <span className={style.edge}></span>
          <span className={style.frontText}> Home
          </span></button>
      </NavLink>

      <div>

        <NavLink to='/favorites' ><button><span className={style.shadow}></span>
          <span className={style.edge}></span>
          <span className={style.frontText}> Favorites
          </span></button>
        </NavLink>

        <SearchBar onSearch={onSearch} location={location} randomHandler={randomHandler} />


      </div>

      <NavLink to='/About' >
        <button><span className={style.shadow}></span>
          <span className={style.edge}></span>
          <span className={style.frontText}> About
          </span></button>
      </NavLink>

    </div >
  )
}

export default Nav

