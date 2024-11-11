import {Box} from "@mui/material";
import React, {useRef, useState, useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import {useDispatch} from 'react-redux';
import {appendEmoji} from '../../store/messageSlice';
import EmojiPicker, {EmojiClickData} from "emoji-picker-react";

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
});

const InputEmoji: React.FC = () => {
    const classes = useStyles();
    const [isOpenPicker, setOpenPicker] = useState<boolean>(false);
    const dispatch = useDispatch();
    const emojiPickerRef = useRef<HTMLDivElement | null>(null);
    const openPickerRef = useRef<HTMLImageElement | null>(null);

    const handleClickEmoji = (event: any, emojiObject) => {
        console.log(emojiObject)
        console.log(event)
        const emoji = event.emoji;
        dispatch(appendEmoji(emoji));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (emojiPickerRef.current
            && !emojiPickerRef.current.contains(event.target) // Нажал вне
            && !openPickerRef.current.contains(event.target)) // Нажал на img
        {
            setOpenPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Box style={{padding: 8}}>
            <div ref={emojiPickerRef}>
                <EmojiPicker
                    lazyLoadEmojis={true}
                    open={isOpenPicker}
                    style={{
                        position: 'absolute',
                        marginTop: '-500px',
                        marginLeft: '-360px',
                    }}
                    autoFocusSearch={true}
                    className={classes.container}
                    onEmojiClick={handleClickEmoji}
                    theme="dark"
                    emojiStyle="native"
                />
            </div>
            <img
                src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f642.png"
                style={{
                    cursor: 'pointer',
                    height: 24,
                    marginLeft: '-80px',
                    position: 'relative',
                    zIndex: 10,
                }}
                onClick={() => setOpenPicker(!isOpenPicker)}
                className={classes.emoji_btn}
                draggable="false"
                ref={openPickerRef}
            />
        </Box>
    );
}

export default InputEmoji;