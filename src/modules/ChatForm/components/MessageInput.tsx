import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { socket } from '../../../services/socket';
import InputEmoji from "../../../components/InputEmoji/InputEmoji";
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../../../store/messageSlice';

interface MessageInputProps {
    username: string;
    senderId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ username, senderId }) => {
    const dispatch = useDispatch();
    const message = useSelector((state: any) => state.message.text);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('message', `${username}: ${message}`, senderId);
            dispatch(setMessage(''));
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div style={{ display: 'flex', padding: '10px', width: '100%' }}>
            <Box style={{ display: 'inline-flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 2,
                                borderColor: 'rgb(80,80,80)',
                            },
                            '&:hover fieldset': {
                                borderColor: 'rgb(190, 190, 190)',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgb(190, 190, 190)',
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            color: 'white',
                        },
                    }}
                    variant="outlined"
                    fullWidth
                    value={message}
                    onChange={(e) => dispatch(setMessage(e.target.value))}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    multiline
                    maxRows={3}
                    minRows={1}
                />
                <InputEmoji />
            </Box>
            <Box
                sx={{
                    width: '120px',
                    display: 'flex',
                    alignContent: 'center',
                    flexWrap: 'wrap'
                }}>
                <Button
                    style={{
                        height: 60,
                        width: 100,
                        backgroundColor: "#5321b6",
                        padding: "18px 36px",
                        fontSize: "18px",
                        alignSelf: 'flex-start',
                    }}
                    variant="contained"
                    color="primary"
                    onClick={sendMessage}>
                    Send
                </Button>
            </Box>
        </div>
    );
};

export default MessageInput;