import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import URLShortener from './components/URLShortener';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import './App.css';
import MobileHeader from './components/MobileHeader';
import FirstBlog from './components/FirstBlogPost';

function App() {
    return (
        <Router>
            <div className="app-container">
                <MobileHeader />
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shortener" element={<URLShortener />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/first-blog-post" element={<FirstBlog />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;