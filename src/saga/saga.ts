import {takeEvery, all, call, put} from 'redux-saga/effects'
import { getFaceDetectionInfoPending, getFaceDetectionInfoFullfiled, getFaceDetectionInfoRejected } from '../features/buttonForm/button.slice'
import { constants } from '../constants'
import { IFaceDetectionData } from '../features/buttonForm/button.interface';
import axios from 'axios'


interface IResponseGenerator {
    config?:string,
    data: IFaceDetectionData,
    headers?: string, 
    request?:string,
    status:string,
    statusText:string
}


const fetchData = (url:string, image_url:string) => {

    const bodyData = {
        user_app_id: {
            user_id: constants.USER_ID,
            app_id: constants.APP_ID
        },
        inputs: [
            {
                data: {
                    image: {
                        url: image_url
                    }
                }
            }
        ]
    }

    return axios.post(url, bodyData, {
        headers: {
            Accept: "application/json",
            Authorization: 'Key ' + constants.PAT
        },
    })

}

function* workedGetFaceDetectionRegions(action: {type: string, payload: string}){
    const IMAGE_URL = action.payload;
    try{
        const clarifaiModelPath = "https://api.clarifai.com/v2/models/" + constants.MODEL_ID + "/versions/" + constants.MODEL_VERSION_ID + "/outputs"
        const response:IResponseGenerator = yield call(fetchData, clarifaiModelPath, IMAGE_URL)
        yield put(getFaceDetectionInfoFullfiled(response.data.outputs[0].data.regions))
    }catch(error){
        yield put(getFaceDetectionInfoRejected('Something went wrong'))
    }
}

function* getFaceDetectionRegions(){
    yield takeEvery(getFaceDetectionInfoPending.type, workedGetFaceDetectionRegions)
}

export default function* rootSaga(){
    yield all([
        call(getFaceDetectionRegions)
    ])
}
