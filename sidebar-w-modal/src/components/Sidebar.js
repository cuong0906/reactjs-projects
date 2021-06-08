import React from 'react';
import logo from '../logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from '../data';
import Links from './Links';
import SocialIcons from './SocialIcons';
import { useGlobalContext } from '../context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="coding addict"/>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <Links links={links}/>
            <SocialIcons social={social}/>
        </aside>
    );
};

export default Sidebar;
