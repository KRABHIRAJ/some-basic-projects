import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({setOpenSidebar, openSidebar}) {
    return (
        <div className={ openSidebar ? 'sidebar show__sidebar' : "sidebar"}>
        <div className='sidebar__header'>
            <img
                className='sidebar__logo'
                src="https://react-projects-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg"
                alt='logo'
              />
              <CloseIcon
                  onClick={() => setOpenSidebar(false)}
                  className='close__icon' />

          
        </div>
          

          <div className='sidebar__item'>
              <HomeIcon className='sidebar__icon' />
              <p>Home</p>
          </div>

          <div className='sidebar__item'>
              <GroupIcon className='sidebar__icon' />
              <p>Team</p>
          </div>

          <div className='sidebar__item'>
              <FolderCopyIcon className='sidebar__icon' />
              <p>Projects</p>
          </div>

          <div className='sidebar__item'>
              <CalendarMonthIcon className='sidebar__icon' />
              <p>Calendar</p>
          </div>

          <div className='sidebar__item'>
              <ArticleIcon className='sidebar__icon' />
              <p>Documents</p>
          </div>
    </div>
  )
}

export default Sidebar
