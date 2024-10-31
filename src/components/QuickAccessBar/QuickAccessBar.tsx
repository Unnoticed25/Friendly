import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import {Box} from "@mui/material";
import SettingsSvg from '/settings.svg';
import HomeSvg from '/home.svg';
import { useNavigate } from 'react-router-dom';
import ButtonIcon from "../../UI/Buttons/ButtonIcon";
import NotificationButton from "../NotificationButton/NotificationModal";


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
            <NotificationButton />
            <ButtonIcon imageUrl={SettingsSvg} onClick={() => console.log('Открыть настройки!')}/>
        </Box>
    )
}
