// LoadingIndicator.tsx
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingIndicator: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Занимает всю высоту экрана
                backgroundColor: '#282c34', // Цвет фона
                color: 'white', // Цвет текста
            }}
        >
            <Typography variant="h5">Loading...</Typography>
            <CircularProgress sx={{ marginTop: 2 }} /> {/* Индикатор загрузки */}
        </Box>
    );
};

export default LoadingIndicator;