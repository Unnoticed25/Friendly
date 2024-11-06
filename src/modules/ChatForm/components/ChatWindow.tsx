import React from 'react';

interface Message {
    text: string;
    senderId: string;
}

interface ChatWindowProps {
    messages: Message[];
    currentUserId: string;
}

// Функция для форматирования текста с переносами строк
const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
};

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, currentUserId }) => {
    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index} style={{
                    textAlign: msg.senderId === currentUserId ? 'right' : 'left',
                    marginBottom: '10px'
                }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px',
                        borderRadius: '5px',
                        backgroundColor: msg.senderId === currentUserId ? '#dcf8c6' : '#ffffff',
                        maxWidth: '70%',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-line' // Сохраняем переносы строк
                    }}>
                        {formatMessage(msg.text)} {/* Форматируем сообщение */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;