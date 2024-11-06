import {makeStyles} from "@mui/styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import QuickAccessBar from "../../components/QuickAccessBar/QuickAccessBar";
import {ChatForm} from "../../modules/ChatForm/index.tsx"


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
});

function Layout() {
    const classes = useStyles();


    return (
        <>
            <div className={classes.wrapper}>
                <Sidebar/>
                <ChatForm/>
                <QuickAccessBar/>
            </div>
        </>
    )
}

export default Layout
