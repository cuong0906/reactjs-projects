import React from 'react';
import sublinks from '../../data';
import { FaTimes } from 'react-icons/fa';
import Sublinks from './Sublinks';
import { useGlobalContext } from '../../context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div className={`${
            isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
        }`}>
            <aside className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <Sublinks sublinks={sublinks}/>
            </aside>
        </div>
    );
};

export default Sidebar;
