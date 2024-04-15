// LoginPage.js
import React from 'react';
import { Button, Typography, Box, Paper, Container } from '@mui/material';

const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(/public/cybertruck-background.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Ensures the background covers the area without spaces
                backgroundPosition: 'center', // Centers the background image
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="xs">
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
                        Choreo Code Challenge Draw
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => window.location.href = "/auth/login"}
                    >
                        Login
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;
