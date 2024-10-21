import {makeStyles} from "@mui/styles";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import ButtonIcon from "../Buttons/ButtonIcon";
import {Box} from "@mui/material";
import NotificationSvg from '/notification-logo.svg';
import SettingsSvg from '/settings.svg';
import HomeSvg from '/home.svg';
import { useNavigate } from 'react-router-dom';


export default function QuickAccessBar() {
    const navigate = useNavigate();

    return (
        <Box style={{
            textAlign: "end",
            padding: 20,
            backgroundColor: "#272A2DFF",
            borderRadius: "24px 0 0 24px"
        }}>
            <SignedIn>
                <UserButton/>
            </SignedIn>

            <ButtonIcon imageUrl={HomeSvg} onClick={() => {navigate('/main')}}/>
            <ButtonIcon imageUrl={NotificationSvg} onClick={() => console.log('Показать уведомления!')}/>
            <ButtonIcon imageUrl={SettingsSvg} onClick={() => console.log('Открыть настройки!')}/>
        </Box>
    )
}
