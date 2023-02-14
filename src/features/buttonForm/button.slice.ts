import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFaceDetectionData } from "./button.interface";
import { IRegions } from "./button.interface";


interface IInitialstate {
    regions: IRegions[]
}

const initialState: IInitialstate = {
    regions:[]  
} 


const buttonSlice = createSlice({
    name: 'detectionFaceButton',
    initialState, 
    reducers:{
        getFaceDetectionInfo: ((state:IInitialstate, action: PayloadAction<IRegions[]>) => {
            state.regions = action.payload
        }),
    }
})

export default buttonSlice.reducer
export const {getFaceDetectionInfo} = buttonSlice.actions