import React from 'react';
import {makeStyles} from "@mui/styles";
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>(theme => ({
    btn: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        transition: 'transform 0.2s',
        marginTop: 20,
        '&:hover': {
            transform: 'scale(1.1)',
        },
        '&:active': {
            transform: 'scale(0.9)',
        },
        width: '40px',
        height: '40px',
    },
}));

interface ButtonIconProps {
    imageUrl: string;
    onClick: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ imageUrl, onClick }) => {
    const classes = useStyles();
    return (
        <button className={classes.btn} onClick={onClick}>
            <img
                src={imageUrl}
                alt="Button Icon"
                onDragStart={(e) => e.preventDefault()}
                style={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'contain'
                }}
            />
        </button>
    );
};

export default ButtonIcon;