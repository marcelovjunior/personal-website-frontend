import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/stats');
                setStats(response.data);
            } catch (err) {
                console.error("Error fetching stats:", err);
                setError("Error fetching dashboard statistics.");
            }
        };

        fetchStats();
    }, []);

    if (error) {
        return <div className="page-container" style={{ color: 'red' }}>{error}</div>;
    }

    if (!stats) {
        return <div className="page-container">Loading...</div>;
    }

    return (
        <div className="page-container">
            <h2>Dashboard</h2>
            <p>Total Shortened URLs: {stats.totalShortenedUrls}</p>
            <p>Total Clicks: {stats.totalClicks}</p>
            {stats.mostAccessedLinks && stats.mostAccessedLinks.length > 0 && (
                <div>
                    <h3>Most Accessed Links:</h3>
                    <ul>
                        {stats.mostAccessedLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.url}
                                </a>{' '}
                                (Clicks: {link.clicks})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {stats.lastFiveGeneratedLinks && stats.lastFiveGeneratedLinks.length > 0 && (
                <div>
                    <h3>Last 5 Generated Links:</h3>
                    <ul>
                        {stats.lastFiveGeneratedLinks.map((link, index) => (
                            <li key={index}>
                                <a href={`http://localhost:5000/${link}`} target="_blank" rel="noopener noreferrer">
                                    {`http://localhost:5000/${link}`}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dashboard;