import { useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const WelcomeForm = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const { isSignedIn } = useAuth();
    useEffect(() => {
        if (isSignedIn) {
            navigate('/main');
        }
    }, [isSignedIn, navigate]);

    return (
        <div className={classes.wrapper}>
            <h1 style={{ color: 'white', padding: 20 }}>Welcome to Friendly!</h1>
            <SignedOut>
                <SignInButton mode={"modal"} className={'sign-in-btn'} />
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl={"/auth"} />
            </SignedIn>
        </div>
    );
}