import {configureStore} from '@reduxjs/toolkit'
import inputFormReducer from '../features/inputForm/inputForm.slice'
import imageAndInfoHandlerReducer from '../features/imageAndInfoHandler/imageAndInfoHandler.slice'
import buttonReducer from '../features/buttonForm/button.slice'
 


export const store = configureStore({
    reducer:{
        inputForm: inputFormReducer,
        imgError: imageAndInfoHandlerReducer,
        faceDetectionInfo: buttonReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch