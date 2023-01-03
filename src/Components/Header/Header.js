import React, { useState } from 'react';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className='header-container'>
      <div className='logo'>
      <h2>SportsDb</h2>
      </div>
      <nav  id='navbar-container' className={`navbar-container ${open? 'top-6' :'top-5'}`}>
        <a href='#'>Home</a>
        <a href='#'>Services</a>
        <a href='#'>Players</a>
        <a href='#'>Contacts</a>
      </nav>
          
      <div onClick={()=>{setOpen(!open)}}  className='menu-icon'  >
        {
          open?<Bars3Icon/>:<XMarkIcon/>
        }
      </div>
    </div>
  );
};

export default Header;