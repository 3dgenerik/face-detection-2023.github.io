import {configureStore} from '@reduxjs/toolkit'
import inputFormReducer from '../features/inputForm/inputForm.slice'
import imageAndInfoHandlerReducer from '../features/imageAndInfoHandler/imageAndInfoHandler.slice'


export const store = configureStore({
    reducer:{
        inputForm: inputFormReducer,
        imgError: imageAndInfoHandlerReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch