import {makeStyles} from "@mui/styles";

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
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    underTitle: {
        borderRadius: 8
    }
});

export default function Sidebar() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.containter}>
                <div className={classes.title}>
                    Friendly room
                </div>
                <hr className={classes.underTitle}/>
            </div>
        </>
    )
}
