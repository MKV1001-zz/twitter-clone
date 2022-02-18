import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TagIcon from '@mui/icons-material/Tag';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

import './Sidebar.css';
function Sidebar(){
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitter__icon"/>
            <SidebarOption active Component={<HomeIcon/>} text="Home"/> 
            <SidebarOption Component={<TagIcon/>} text="Explore"/> 
            <SidebarOption Component={<NotificationsNoneIcon/>} text="Notifications"/>
            <SidebarOption Component={<MailOutlineIcon/>} text="Messages"/> 
            <SidebarOption Component={<BookmarkBorderIcon/>} text="Bookmarks"/>
            <SidebarOption Component={<ListAltIcon/>} text="Lists"/>
            <SidebarOption Component={<PermIdentityIcon/>} text="Profile"/>
            <SidebarOption Component={<MoreHorizIcon/>} text="More"/>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
        
    );

}

export default Sidebar;