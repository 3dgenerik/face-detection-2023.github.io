import {configureStore} from '@reduxjs/toolkit'
import inputFormReducer from '../features/inputForm/inputForm.slice'
import imageAndInfoHandlerReducer from '../features/imageAndInfoHandler/imageAndInfoHandler.slice'
import getFaceDetectionInfoReducer from '../features/buttonForm/button.slice'
import optionsReducer from '../features/options/options.slice'
import faceDetectionNumPopupReducer from '../features/faceDetectionNumPopup/optionDetectionNumPopup.slice'
import routeReducer from '../features/routes/routes.slice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/saga'

const saga = createSagaMiddleware()
 
export const store = configureStore({
    reducer:{
        inputForm: inputFormReducer,
        imgError: imageAndInfoHandlerReducer,
        faceDetectionInfo: getFaceDetectionInfoReducer,
        faceDetectionNumPopupBool: faceDetectionNumPopupReducer,
        option: optionsReducer,
        route: routeReducer
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(saga)
})

saga.run(rootSaga)

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch