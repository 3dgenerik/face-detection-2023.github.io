import { createSlice, PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";

interface IInitialState{
    btnName: string | null
}

const initialState: IInitialState = {
    btnName: ''
}

const buttonSlice = createSlice({
    name: 'btnName',
    initialState, 
    reducers:{
        getBtnName: ((state:IInitialState, action: PayloadAction<string>) => {
            state.btnName = action.payload
        })
    }
})

export default buttonSlice.reducer
export const {getBtnName} = buttonSlice.actions