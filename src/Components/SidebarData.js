import React from 'react'
import { Home, ListAlt, CalendarMonthOutlined, Notifications } from '@mui/icons-material';


export const SidebarData = [
    {
        title: "Home",
        icon: <Home />,
        link: "/home"
    },
    {
        title: "Notifications",
        icon: <Notifications />,
        link: "/notifications"
    },
    {
        title: "Lists",
        icon: <ListAlt />,
        link: "/lists"
    },
    {
        title: "Calendar",
        icon: <CalendarMonthOutlined />,
        link: "/calendar"
    }
];
