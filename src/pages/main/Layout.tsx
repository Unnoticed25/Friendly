import {useState} from 'react'
import {makeStyles} from "@mui/styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import QuickAccessBar from "../../components/QuickAccessBar/QuickAccessBar";

const useStyles = makeStyles({
    wrapper: {
        display: 'grid',
        weight: '100%',
        gridTemplateColumns: '1fr 4fr 80px',
    }
});

function Layout() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Sidebar/>
                <div style={{textAlign: "center", marginTop: 40, color: 'gray'}}>Welcome to friendly</div>
                <QuickAccessBar/>
            </div>
        </>
    )
}

export default Layout
