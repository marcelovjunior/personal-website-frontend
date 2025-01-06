import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import './MobileHeader.css';

function MobileHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="mobile-header">
            <button className="hamburger-button" onClick={toggleSidebar}>
                <FaBars size={24} />
            </button>
            <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Sidebar/>
            </div>
            <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar} />
        </div>
    );
}

export default MobileHeader;