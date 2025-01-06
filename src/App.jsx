import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import URLShortener from './components/URLShortener';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import './App.css';
import MobileHeader from './components/MobileHeader';

function App() {
    return (
        <Router>
            <div className="app-container">
                <MobileHeader />
                <Sidebar />
                <div className="content">
                    <div className="gradient-background">
                    <div className="glass-container" style={{ top: '80px', left: 'calc(10dvw)', color: '#fff', width: 'calc(75dvw - 80px)', padding: '20px' }}>
                        <h2>Welcome!</h2>
                        <p>This is a placeholder text</p>

                    </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shortener" element={<URLShortener />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;