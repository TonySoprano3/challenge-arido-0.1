import React from 'react';
import ScrollTop from '../ScrollTop/ScrollTop';
import './Navbar.scss';



const Navbar = () => {
  return (
 
    <nav className='app__navbar'>
      <ScrollTop />
        <ul>
        <a href='/'><li>Home</li></a>
        <a href='#users'><li>Users</li></a>
   
        </ul>

    </nav>
  
  )
}

export default Navbar