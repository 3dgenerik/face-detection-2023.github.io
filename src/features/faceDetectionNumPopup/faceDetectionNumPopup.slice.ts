import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialstate{
    isPopedUp: boolean
}

const initialState = {
    isPopedUp: false
}

const faceDetectionNumPopupSlice = createSlice({
    name: 'faceDetectionNumPopup',
    initialState,
    reducers:{
        setIsPopedUp: ((state:IInitialstate, action: PayloadAction<boolean>)=>{
            state.isPopedUp = action.payload
        })
    }
})

export default faceDetectionNumPopupSlice.reducer
export const {setIsPopedUp} = faceDetectionNumPopupSlice.actions