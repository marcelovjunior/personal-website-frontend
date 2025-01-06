import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardMedia, CardContent, Box } from '@mui/material';
import backgroundImage from '../assets/background.png';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function FirstBlogPost() {
    const postDate = new Date('2024-08-15T12:00:00');
    const formattedDate = postDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box className="page-container" sx={{ margin: '0px auto', padding: '20px', alignContent: 'center', display: 'flex', alignItems: 'center' }}>
            <Card sx={{ maxWidth: '800px', boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={backgroundImage}
                    alt="Blog Post Banner"
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ padding: '20px' }}>
                    <Link to="/blog" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', marginBottom: '20px' }}>
                        <ArrowBackIcon sx={{ marginRight: '5px' }} />
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Back to Blog</Typography>
                    </Link>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                            By: John Doe
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            Created At: {formattedDate}
                        </Typography>
                    </Box>
                    <Typography variant="h4" component="h2" gutterBottom>
                        The Wonders of Modern Computing
                    </Typography>
                    <Typography variant="body1" paragraph>
                        In today's rapidly evolving technological landscape, the field of computing stands as a cornerstone of innovation and progress. From the smartphones in our pockets to the complex systems powering global infrastructure, computers have become indispensable tools that shape our daily lives.
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                        The Evolution of Computing
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The journey of computing began with mechanical devices like the abacus and progressed through electromechanical calculators to the electronic computers we know today. The invention of the transistor and the integrated circuit revolutionized the field, leading to smaller, faster, and more affordable computers.
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Key Concepts in Modern Computing
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Modern computing encompasses a wide range of concepts, including:
                    </Typography>
                        <Box>
                            <Typography variant="body1" component="li"><strong >Artificial Intelligence (AI):</strong> The development of computer systems capable of performing tasks that typically require human intelligence.</Typography>
                            <Typography variant="body1" component="li"><strong >Machine Learning (ML):</strong> A subset of AI that focuses on enabling computers to learn from data without explicit programming.</Typography>
                            <Typography variant="body1" component="li"><strong >Cloud Computing:</strong> The delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”).</Typography>
                            <Typography variant="body1" component="li"><strong>Cybersecurity:</strong> The practice of protecting computer systems and networks from theft, damage, or unauthorized access.</Typography>
                        </Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                        The Future of Computing
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The future of computing is filled with exciting possibilities. Quantum computing, for example, promises to solve problems that are currently intractable for classical computers. As technology continues to advance, we can expect even more transformative changes in the way we interact with computers and the world around us.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default FirstBlogPost;