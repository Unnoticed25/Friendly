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
    title: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ imageUrl, onClick, title}) => {
    const classes = useStyles();
    return (
        <button className={classes.btn} onClick={onClick}>
            <img
                src={imageUrl}
                alt="Button Icon"
                onDragStart={(e) => e.preventDefault()}
                style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain'
                }}
                title={title}
            />
        </button>
    );
};

export default ButtonIcon;