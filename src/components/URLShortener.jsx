import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    IconButton,
    Button,
    TextField,
    Box
} from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

function URLShortener() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState(null);
    const [urlHistory, setUrlHistory] = useState(() => {
        const storedHistory = localStorage.getItem('urlHistory');
        return storedHistory ? JSON.parse(storedHistory) : []
    });

    useEffect(() => {
        localStorage.setItem('urlHistory', JSON.stringify(urlHistory));
    }, [urlHistory]);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const shortenUrl = async () => {
        setError(null);
        setShortenedUrl('')
        try {
            const normalizedOriginalUrl = originalUrl.startsWith('http://') || originalUrl.startsWith('https://') ? originalUrl : `https://${originalUrl}`;
            const response = await axios.post('http://localhost:5000/api/url/shorten', { originalUrl: normalizedOriginalUrl });
            const newShortenedUrl = response.data.shortUrl;
            setShortenedUrl(newShortenedUrl);
            const now = new Date();
            const time = now.toLocaleString();
            setUrlHistory(prevHistory => [{ original: normalizedOriginalUrl, short: newShortenedUrl, time: time }, ...prevHistory]);
        } catch (err) {
            console.error("Error shortening URL:", err);
            const errorMessage = err.response?.data?.message || "Error shortening URL. Please check the URL and try again.";
            setError(errorMessage);
        }
    };

    const clearHistory = () => {
        setUrlHistory([]);
    };

    return (
        <div className="page-container" style={{ padding: '0px 10%' }}>
            <Grid container spacing={2} justifyContent="center" sx={{ paddingTop: '30px', maxWidth: '900px', margin: '0 auto' }}>
                <Grid item xs={12} sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', maxWidth: '700px' }}>
                    <Typography variant="h5" style={{ fontFamily: 'Arial, sans-serif' }}>
                        URL <span style={{ background: 'linear-gradient(to right, #6a1b9a, #D922FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Shortener</span>
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <TextField
                                label="Enter URL"
                                variant="outlined"
                                value={originalUrl}
                                onChange={(e) => setOriginalUrl(e.target.value)}
                                fullWidth margin="normal"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: '#f0f0f0',
                                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9c27b0' },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9c27b0' },
                                        '&.MuiInputBase-root.Mui-focused': { borderColor: '#9c27b0' }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#9c27b0',
                                    }
                                }}
                                onKeyDown={(e) => { if (e.key === 'Enter') { shortenUrl(); } }}
                            />
                            <Button
                                onClick={shortenUrl}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#9c27b0',
                                    color: 'white',
                                    padding: '12px 15px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginLeft: '10px',
                                    marginTop: '8px',
                                    height: '56px'
                                }}>
                                    Shorten
                                </Button>
                    </Box>
                    {error && <Typography variant="body2" style={{ color: 'red' }}>{error}</Typography>}
                    {shortenedUrl && (
                        <Typography variant="body1" style={{ wordBreak: 'break-all' }}>
                            Shortened URL:{' '}
                            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                                {shortenedUrl}
                            </a>
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={12} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5">History</Typography>
                        <Button variant="outlined" onClick={clearHistory} size="small">Clear History</Button>
                    </div>
                    <TableContainer component={Paper} sx={{ marginTop: '20px', maxHeight: '300px' }}>
                        <Table sx={{ minWidth: '420px' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Original URL</TableCell>
                                    <TableCell align="right">Shortened URL</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {urlHistory.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            <a href={row.original} target="_blank" rel="noopener noreferrer">
                                                {row.original}
                                            </a>
                                        </TableCell>
                                        <TableCell align="right" sx={{ maxWidth: '300px', overflow: 'clip', textOverflow: 'clip', whiteSpace: 'nowrap' }}>
                                            <a href={`${row.short}`} target="_blank" rel="noopener noreferrer">
                                                {row.short}
                                            </a>
                                            <IconButton onClick={() => copyToClipboard(`${row.short}`)} aria-label="copy" size="small">
                                                <FileCopyIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}

export default URLShortener;