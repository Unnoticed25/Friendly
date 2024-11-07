import {Box} from "@mui/material";
import React, {useState} from 'react';
import Picker from "emoji-picker-react";

interface IProps_InputEmoji {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const InputEmoji: React.FC<IProps_InputEmoji> = ({handleClick}) => {
    const [isOpenPicker, setOpenPicker] = useState<boolean>(false);

    return (
        <Box
        style={{
            padding: 8,
        }}
        >
            <Picker
            open={isOpenPicker}
            style={{
                position: 'absolute',
                marginTop: '-58%',
                marginLeft: '-26%'
            }}
            />
            <img
                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                style={{
                    cursor: 'pointer',
                    height: 24,
                }}
                onClick={() => setOpenPicker(!isOpenPicker)}
            />
        </Box>
    )
}

export default InputEmoji;
