import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Blog() {
    const [posts, setPosts] = useState([
        {
            title: "First Blog Post",
            date: "October 26, 2024",
            content: "This is just a placeholder for the real blog (that will be fetched from my backend later™)",
            slug: "first-blog-post"
        },
    ]);

    return (
        <>
            <div className="gradient-background" style={{ height: '200px' }} />
            <div className="page-container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h4">{"My Tech Takes"}</Typography>
                <Grid container spacing={0} sx={{ maxWidth: '800px', margin: '20px auto 0px auto' }}>
                    {posts.map((post, index) => (
                        <Grid item xs={12} key={index} sx={{ height: '300px' }}>
                            <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Box sx={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', cursor: 'pointer', height: '220px' }}>
                                    <Typography variant="h6">{post.title}</Typography>
                                    <Typography variant="subtitle2" sx={{ fontStyle: 'italic', color: '#777' }}>{post.date}</Typography>
                                    <Typography variant="body2" sx={{ marginTop: '10px' }}>{post.content}</Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default Blog;