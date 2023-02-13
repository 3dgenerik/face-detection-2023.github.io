import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState{
    imgLoadingError: boolean
}

const initialState: IInitialState = {
    imgLoadingError: false
}

const imageAndInfoHandlerSlice = createSlice({
    name:'imageAndInfoHandler',
    initialState,
    reducers:{
        setImageError: ((state:IInitialState, action: PayloadAction<boolean>) =>{
            state.imgLoadingError = action.payload
        })
    }
})

export default imageAndInfoHandlerSlice.reducer
export const {setImageError} = imageAndInfoHandlerSlice.actions