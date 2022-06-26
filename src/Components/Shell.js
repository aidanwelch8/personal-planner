import React, { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Shell.css';
import { IconContext } from 'react-icons';

function Shell() {
  const [sidebar, setSidebar] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <Menu onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <Close />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className='nav-text'>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={sidebar ? 'main-body active' : 'main-body'}>
          HELLO THERE!
          <currentPage />
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Shell;