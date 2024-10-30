import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { isEmpty } from "../../helpers/isEmpty";

interface LoadingIndicatorProps {
    title?: string; // title может быть строкой или undefined
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = (props) => {
    const { title } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#282c34',
                color: 'white',
            }}
        >
            {isEmpty(title)
                ? ''
                : <Typography variant="h5">{title}</Typography>
            }
            <CircularProgress sx={{ marginTop: 2 }} />
        </Box>
    );
};

export default LoadingIndicator;