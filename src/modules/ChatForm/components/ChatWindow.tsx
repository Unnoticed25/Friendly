import React from 'react';
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    message: {
        marginBottom: '10px',
        padding: '1px',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    },
});

interface Message {
    sender: string;
    text: string;
}

interface ChatWindowProps {
    messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
    const classes = useStyles();

    return (
        <div className="chat-window">
            {messages.map((msg, index) => (
                <div key={index} className={classes.message}>
                    <strong>{msg.sender}:</strong> {msg.text}
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;