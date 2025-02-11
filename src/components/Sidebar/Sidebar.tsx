import {makeStyles} from "@mui/styles";
import React from "react";
import {useState} from "react";
import MembersList from "./MembersList";

const useStyles = makeStyles({
    containter:{
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0 24px  24px 0',
        backgroundColor: '#272A2DFF;',
        height: '100vh',
        alignItems: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    underTitle: {
        borderRadius: 8
    },
    editChannel: {
        position: 'absolute',
        bottom: 8,
        color: '#b6b6b6',
        cursor: 'pointer',
    }
});



export default function Sidebar() {
    const classes = useStyles();
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleEditChannel: React.FC = () => {
        setIsEdit(prev => !prev);
    }

    return (
        <>
            <div className={classes.containter}>
                <div className={classes.title}>
                    Friendly room
                </div>
                <hr className={classes.underTitle}/>
                <div>
                    <MembersList idChannel={1234} nameChannel={'Friendly room'}/>
                </div>
                <div>
                    Main channel
                </div>
                <div>
                    Add channel
                </div>
                <div className={classes.editChannel} onClick={handleEditChannel}>
                    Edit channel
                </div>
            </div>
        </>
    )
}
