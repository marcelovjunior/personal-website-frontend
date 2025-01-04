import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Blog() {
    const [posts, setPosts] = useState([
        {
            title: "Third Blog Post",
            date: "November 2, 2024",
            content: "This is the content of the third blog post. It's an example of what a blog post might look like.",
            slug: "third-blog-post"
        },
        {
            title: "Second Blog Post",
            date: "November 1, 2024",
            content: "This is the content of the second blog post. It's another example of what a blog post might look like.",
            slug: "second-blog-post"
        },
        {
            title: "First Blog Post",
            date: "October 26, 2024",
            content: "This is just a placeholder for the real blog (that will be fetched from my backend later™)",
            slug: "first-blog-post"
        },
    ]);

    return (
        <div className="page-container">
            <Typography variant="h4">{"My Tech Takes"}</Typography>
            <Grid container spacing={3} sx={{maxWidth: '800px', margin: '0 auto'}}>
                {posts.map((post, index) => (
                    <Grid item xs={12} md={6} key={index} sx={{maxHeight: '300px' }}>
                        <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                            <Box sx={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', cursor: 'pointer' }}>
                                <Typography variant="h6">{post.title}</Typography>
                                <Typography variant="subtitle2" sx={{ fontStyle: 'italic', color: '#777' }}>{post.date}</Typography>
                                <Typography variant="body2" sx={{marginTop: '10px'}}>{post.content}</Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Blog;