import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessageState {
    text: string;
}

const initialState: MessageState = {
    text: '',
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
        appendEmoji(state, action: PayloadAction<string>) {
            state.text += action.payload;
        }
    },
});

export const { setMessage, appendEmoji } = messageSlice.actions;

export default messageSlice.reducer;