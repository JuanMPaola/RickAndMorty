import React from 'react'
import SearchBar from './SearchBar.jsx'

function Nav (props){
   const {onSearch} = props;
  return (
    <div className='nav'>
        <SearchBar onSearch={onSearch} />
    </div>
  )
}

export default Nav

