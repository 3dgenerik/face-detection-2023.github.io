import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { constants } from "../../constants";

interface IInitialState {
    detectionOption: constants
}

const initialState:IInitialState = {
    detectionOption: constants.FACE_DETECTION
}

const optionsSlice = createSlice({
    name:'options',
    initialState, 
    reducers:{
        changeDetectOption: ((state: IInitialState, action: PayloadAction<constants>) => {
            state.detectionOption = action.payload
        })
    }
})

export default optionsSlice.reducer
export const {changeDetectOption} = optionsSlice.actions