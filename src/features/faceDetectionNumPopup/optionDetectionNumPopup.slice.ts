import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialstate{
    isPopedUp: boolean
}

const initialState = {
    isPopedUp: false
}

const optionDetectionNumPopupSlice = createSlice({
    name: 'optionDetectionNumPopup',
    initialState,
    reducers:{
        setIsPopedUp: ((state:IInitialstate, action: PayloadAction<boolean>)=>{
            state.isPopedUp = action.payload
        })
    }
})

export default optionDetectionNumPopupSlice.reducer
export const {setIsPopedUp} = optionDetectionNumPopupSlice.actions