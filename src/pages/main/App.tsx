import {useState} from 'react'
import {makeStyles} from "@mui/styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";

const useStyles = makeStyles({
    wrapper: {
        display: 'grid',
        weight: '100%',
        gridTemplateColumns: '1fr 3fr 1fr',
    }
});

function App() {

    const classes = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Sidebar/>
                <div></div>
                <div style={{textAlign: "end", padding: 20, backgroundColor: "#272A2DFF", borderRadius: "24px 0 0 24px"}}>
                    <SignedOut>
                        <SignInButton mode={"modal"} className={'sign-in-btn'}/>
                    </SignedOut>

                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </div>
        </>
    )
}

export default App
