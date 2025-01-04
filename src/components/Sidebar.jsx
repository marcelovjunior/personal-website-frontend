import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLink, FaChartLine } from 'react-icons/fa'; // Import FaHome
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" className="sidebar-link">
                        <FaHome size={24} /> {/* Home Icon */}
                    </Link>
                </li>
                <li>
                    <Link to="/shortener" className="sidebar-link">
                        <FaLink size={24} /> {/* Shortener Icon */}
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="sidebar-link">
                        <FaChartLine size={24} />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;