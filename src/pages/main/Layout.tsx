import {useEffect, useState} from 'react'
import {makeStyles} from "@mui/styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import QuickAccessBar from "../../components/QuickAccessBar/QuickAccessBar";
import NotificationModal from "../../components/NotificationButton/NotificationModal";
import {socket} from "../../services/socket";
import MessageInput from "../../modules/ChatForm/components/MessageInput";
import ChatWindow from "../../modules/ChatForm/components/ChatWindow";
import FriendList from "../../modules/ChatForm/components/FriendList";


interface Message {
    sender: string;
    text: string;
}

interface Friend {
    id: number;
    name: string;
}


const useStyles = makeStyles({
    wrapper: {
        display: 'grid',
        weight: '100%',
        gridTemplateColumns: '1fr 4fr 80px',
    },
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        // justifyContent: 'space-between',
    },
    messagesContainer: {
        flexGrow: 1,
        overflowY: 'auto',
        padding: '10px',
        // backgroundColor: '#f0f0f0'
    },
});

function Layout() {
    const classes = useStyles();

    const [messages, setMessages] = useState<Message[]>([]);
    const [username] = useState<string>('User'); // Замените на реальное имя пользователя
    const [friends] = useState<Friend[]>([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ]); // Моковые данные

    useEffect(() => {
        socket.on('message', (msg: string) => {
            setMessages((prevMessages) => [...prevMessages, { sender: 'Server', text: msg }]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    return (
        <>
            <div className={classes.wrapper}>
                <Sidebar/>
                <div style={{textAlign: "center", color: 'gray', maxHeight: '100vh'}}>
                    <div className={classes.chatContainer}>
                        <div className={classes.messagesContainer}>
                            <ChatWindow messages={messages} />
                        </div>
                        <MessageInput username={username} />
                    </div>

                </div>
                <QuickAccessBar/>
            </div>
        </>
    )
}

export default Layout
