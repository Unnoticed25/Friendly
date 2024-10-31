import React, {useState} from 'react';
import {makeStyles} from '@mui/styles';
import NotificationSvg from '/notification-logo.svg';
import ButtonIcon from "../../UI/Buttons/ButtonIcon";
import {Button} from "@mui/material";


const useStyles = makeStyles({
    modalWrapper: {
        position: 'absolute',
        margin: '-40px 0 0 -280px',
        backgroundColor: '#f0f0f0',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: (props: { isOpen: boolean }) => (props.isOpen ? 1 : 0),
        transform: (props: { isOpen: boolean }) => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)'),
        pointerEvents: (props: { isOpen: boolean }) => (props.isOpen ? 'auto' : 'none'),
        width: 260,
    },
    modalContent: {
        position: 'relative',
        textAlign: 'left',
    },
    close: {
        width: '100%',
        display: 'flex',
        justifyContent: 'end',
        marginTop: -12,
        cursor: 'pointer',
    },
    notificationButton: {
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: 14,
        color: '#b6b6b6',
        fontWeight: '600',
        textTransform: 'none',
    },
    hr: {
        borderBottom: 'solid #E1E1E1FF 1px',
        marginBottom: 12,
    },
    notifications:{
        height: 40,
        fontSize: 14,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        // whiteSpace: 'nowrap',
        display: "-webkit-box",
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
    }
});

// Компонент-обертка для модального окна
const ModalWrapper: React.FC<{ children: React.ReactNode; isOpen: boolean }> = ({children, isOpen}) => {
    const classes = useStyles({isOpen});
    return (
        <div className={classes.modalWrapper}>
            {children}
        </div>
    );
};

const NotificationModal: React.FC<{ notifications: string[]; onClose: () => void }> = ({notifications, onClose}) => {
    const classes = useStyles();
    return (
        <ModalWrapper isOpen={true}>
            <div className={classes.modalContent}>
                <span className={classes.close} onClick={onClose}>&times;</span>
                <h2 style={{textAlign: 'center'}}>Уведомления</h2>
                <hr className={classes.hr}/>
                <ul>
                    {notifications.map((notification, index) => (
                        <li style={{listStyleType: 'none'}} key={index}>
                            <div className={classes.notifications}>{notification}</div>
                            <hr className={classes.hr}/>
                        </li>
                    ))}
                </ul>
                <Button className={classes.notificationButton} onClick={() => console.log('Показать больше')}>
                    Показать больше
                </Button>
            </div>
        </ModalWrapper>
    );
};

const NotificationButton: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const notifications = [
        "Вам пришло сообщение от Test123456",
        "Пропущенный звонок от Даёшь молодеж",
        "Вместо нормального функционала, сидишь херней страдаешь",
    ];

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div>
            <ButtonIcon imageUrl={NotificationSvg} onClick={toggleModal} title={'Уведомления'}/>
            {isModalOpen && (
                <NotificationModal notifications={notifications} onClose={toggleModal}/>
            )}
        </div>
    );
};

export default NotificationButton;