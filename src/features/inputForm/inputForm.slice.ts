import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState{
    inputUrl: string
}

const initialState: IInitialState = {
    inputUrl:''
}

const inputFormSlice = createSlice({
    name:'inputForm',
    initialState,
    reducers:{
        addUrl: ((state:IInitialState, action: PayloadAction<string>) => {
            state.inputUrl = action.payload
        })
    }
})

export default inputFormSlice.reducer
export const {addUrl} = inputFormSlice.actions