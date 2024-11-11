import { Box } from "@mui/material";
import React, { useState } from 'react';
import Picker from "emoji-picker-react";
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { appendEmoji } from '../../store/messageSlice';
import {createAction} from "@reduxjs/toolkit";

const useStyles = makeStyles({
    container: {
        fontSize: '14px !important',
    },
    emoji_btn: {
        transition: '0.3s',
        outline: 'none',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        '&:active': {
            transform: 'scale(0.9)',
        }
    }
})

const InputEmoji: React.FC = () => {
    const classes = useStyles();
    const [isOpenPicker, setOpenPicker] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleClickEmoji = (event: any) => {
        const emoji = event.emoji;
        dispatch(appendEmoji(emoji, )); // Добавляем эмоджи в состояние через Redux
    };

    return (
        <Box style={{ padding: 8 }}>
            <Picker
                open={isOpenPicker}
                style={{
                    position: 'absolute',
                    marginTop: '-500px',
                    marginLeft: '-320px'
                }}
                autoFocusSearch={true}
                className={classes.container}
                onEmojiClick={handleClickEmoji}
            />
            <img
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f642.png"
                style={{
                    cursor: 'pointer',
                    height: 24,
                }}
                onClick={() => setOpenPicker(!isOpenPicker)}
                className={classes.emoji_btn}
                draggable="false"
            />
        </Box>
    )
}

export default InputEmoji;