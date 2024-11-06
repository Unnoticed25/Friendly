// src/components/MessageInput.tsx
import React, { useState } from 'react';
import {TextField, Button, Box} from '@mui/material';
import { socket } from '../../../services/socket';

interface MessageInputProps {
    username: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ username }) => {
    const [message, setMessage] = useState<string>('');

    const sendMessage = () => {
        if (message.trim()) { // Проверка на пустое сообщение
            socket.emit('message', `${username}: ${message}`); // Отправляем сообщение с именем пользователя
            setMessage('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Предотвращаем стандартное поведение (перенос строки)
            sendMessage(); // Отправляем сообщение
        }
    };

    return (
        <div style={{ display: 'flex', padding: '10px', width: '100%' }}>
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
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                multiline
                maxRows={3}
                minRows={1}
            />
            <Box
            sx={{
                marginLeft: '12px',
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