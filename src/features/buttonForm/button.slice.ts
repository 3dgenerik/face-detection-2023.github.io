import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IData } from "./button.interface";
import { constants } from "../../config";
import { IRegions, IColors } from "./button.interface";


interface IInitialstate {
    isLoaded: boolean,
    optionSelection: IData
    error: string
}

const initialState: IInitialstate = {
    isLoaded: false,
    optionSelection: {
        regions: [],
        colors: []  
    },
    error: '' 
} 

export interface IDetectionInput{
    url: string,
    detectOption: constants
}

const buttonSlice = createSlice({
    name: 'detectionFaceButton',
    initialState, 
    reducers:{
        getFaceDetectionInfoPending: ((state:IInitialstate, action: PayloadAction<IDetectionInput>) => {
            state.isLoaded = true
        }),
        getFaceDetectionInfoFullfiled: ((state:IInitialstate, action: PayloadAction<IData>) => {
            state.isLoaded = false
            state.optionSelection = action.payload
        }),
        getFaceDetectionInfoRejected: ((state:IInitialstate, action: PayloadAction<string>) => {
            state.isLoaded = false
            state.optionSelection = {
                regions: [],
                colors: []  
            }
            state.error = action.payload
        }),
        clearRegions: ((state:IInitialstate) => {
            state.isLoaded = false
            state.optionSelection = {
                regions: [],
                colors: []  
            }
        })
    }
})

export default buttonSlice.reducer
export const {getFaceDetectionInfoPending, getFaceDetectionInfoFullfiled, getFaceDetectionInfoRejected, clearRegions} = buttonSlice.actions