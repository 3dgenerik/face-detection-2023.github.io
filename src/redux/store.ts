import {configureStore} from '@reduxjs/toolkit'
import inputFormReducer from '../features/inputForm/inputForm.slice'
import imageAndInfoHandlerReducer from '../features/imageAndInfoHandler/imageAndInfoHandler.slice'
import getButtonName from '../features/inputForm/button.slice'


export const store = configureStore({
    reducer:{
        inputForm: inputFormReducer,
        imgError: imageAndInfoHandlerReducer,
        btnName: getButtonName
    }
})

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch