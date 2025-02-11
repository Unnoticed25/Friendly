import React, {useState, useEffect} from "react";
import {makeStyles} from "@mui/styles";
import {Box, Tooltip, Button} from "@mui/material";
import { useUser } from '@clerk/clerk-react';
import me from '/me.jpg'
import woman from '/woman.jpg'

const useStyles = makeStyles({
    container: {
        marginTop: 12,
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 12,
        backgroundColor: 'rgb(76,79,86)',
        height: 34,
        width: '100%'
    },
    img: {
        borderRadius: 9999,
        width: 30,
        height: 30,
        margin: '0 4px 0 0',
        cursor: 'pointer',
        userDrag: 'none',
        display: 'inline-block',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    moreButton: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '0.7rem',
        padding: '2px 8px 2px 4px',
        minWidth: 'auto',
    }
});

let otherMem = [];
let members = [];

function MembersList(props) {
    const classes = useStyles();
    const { user } = useUser();
    const [isMembersLoaded, setIsMembersLoaded] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const visibleMembers = showAll ? members : members.slice(0, 5);

    async function getMembers() {
        try {
            const response = await fetch('/main-room.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // members = [{id: user.id, name: user.username, srcImg: user.imageUrl}, ...data.members];
            members = [...data.members];
            setIsMembersLoaded(true);
        } catch (e) {
            console.log('Ошибка при загрузке участников', e);
        }
    }

    useEffect(() => {
        getMembers();
    }, []);


    return (
        <>
            <Box className={classes.container}>
                {isMembersLoaded &&
                    visibleMembers.map((el, i) => (
                        <Tooltip
                            key={i}
                            title={el.name}
                            placement="bottom"
                            arrow
                            style={{height: 30}}
                        >
                            <img src={el.srcImg} className={classes.img} alt={el.name} />
                        </Tooltip>
                    ))
                }
                {members.length > 5 && !showAll && (
                    <Button className={classes.moreButton} onClick={() => setShowAll(true)}>
                        +{members.length - 5}
                    </Button>
                )}
            </Box>
        </>
    );
}

export default MembersList;
