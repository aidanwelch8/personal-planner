import React from 'react';
import { Home, ListAlt, CalendarMonthOutlined, Notifications } from '@mui/icons-material';
import './Navbar.css';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <Home />,
        className: 'nav-text'
    },
    {
        title: 'Lists',
        path: '/lists',
        icon: <ListAlt />,
        className: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <CalendarMonthOutlined />,
        className: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <Notifications />,
        className: 'nav-text'
    },
]