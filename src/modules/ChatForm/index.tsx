import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { socket } from "../../services/socket";
import MessageInput from "./components/MessageInput";
import ChatWindow from "./components/ChatWindow";
import { makeStyles } from "@mui/styles";
import { useUser } from '@clerk/clerk-react';

interface Message {
    text: string;
    senderId: string; // Добавляем senderId в интерфейс
}

const useStyles = makeStyles({
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-between',
    },
    messagesContainer: {
        flexGrow: 1,
        overflowY: 'auto',
        padding: '10px',
        paddingBottom: 56,
        maxHeight: '100%',
        scrollbarWidth: 'none', // Для Firefox
        '&::-webkit-scrollbar': {
            display: 'none', // Для Chrome, Safari и Opera
        },
        borderRadius: '8px',
    }
});

export const ChatForm = () => {
    const classes = useStyles();
    const { user } = useUser();

    const [messages, setMessages] = useState<Message[]>([]);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const sendMessage = (text) => {
        const senderId = user.id;
        socket.emit('message', text, senderId);
    };

    useEffect(() => {
        let senderId = user.id;
        socket.on('message', (msg: string, senderId: string) => {
            setMessages((prevMessages) => [...prevMessages, { text: msg, senderId }]);
            scrollToBottom();
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scroll({ top: messagesContainerRef.current.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <Box>
            <div style={{ textAlign: "center", color: 'gray', height: '100vh' }}>
                <div className={classes.chatContainer}>
                    <div className={classes.messagesContainer} ref={messagesContainerRef}>
                        <ChatWindow messages={messages} currentUserId={user.id} />
                    </div>
                    <MessageInput username={user.fullName} senderId={user.id}/>
                </div>
            </div>
        </Box>
    );
}