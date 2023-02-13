import {configureStore} from '@reduxjs/toolkit'
import inputFormReducer from '../components/inputForm/inputForm.slice'
import imageAndInfoHandlerReducer from '../components/imageAndInfoHandler/imageAndInfoHandler.slice'


export const store = configureStore({
    reducer:{
        inputForm: inputFormReducer,
        imgError: imageAndInfoHandlerReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch