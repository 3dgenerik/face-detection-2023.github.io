import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegions } from "./button.interface";


interface IInitialstate {
    isLoaded: boolean,
    regions: IRegions[],
    error: string
}

const initialState: IInitialstate = {
    isLoaded: false,
    regions:[],
    error: '' 
} 


const buttonSlice = createSlice({
    name: 'detectionFaceButton',
    initialState, 
    reducers:{
        getFaceDetectionInfoPending: ((state:IInitialstate, action: PayloadAction<string>) => {
            state.isLoaded = true
        }),
        getFaceDetectionInfoFullfiled: ((state:IInitialstate, action: PayloadAction<IRegions[]>) => {
            state.isLoaded = false
            state.regions = action.payload
        }),
        getFaceDetectionInfoRejected: ((state:IInitialstate, action: PayloadAction<string>) => {
            state.isLoaded = false
            state.regions = []
            state.error = action.payload
        }),
        clearRegions: ((state:IInitialstate) => {
            state.isLoaded = false
            state.regions = []
        })
    }
})

export default buttonSlice.reducer
export const {getFaceDetectionInfoPending, getFaceDetectionInfoFullfiled, getFaceDetectionInfoRejected, clearRegions} = buttonSlice.actions