import { takeEvery, all, call, put } from "redux-saga/effects";
import {
  getFaceDetectionInfoPending,
  getFaceDetectionInfoFullfiled,
  getFaceDetectionInfoRejected,
} from "../features/buttonForm/button.slice";
import { IFaceDetectionData } from "../features/buttonForm/button.interface";
import { clarifai } from "../config";
import { fetchDetectionData } from "./fetchDetectionData";
import { IDetectionInput } from "../features/buttonForm/button.slice";
import { constants } from "../config";

interface IResponseGenerator {
  config?: string;
  data: IFaceDetectionData;
  headers?: string;
  request?: string;
  status: string;
  statusText: string;
}

function* workedGetFaceDetectionRegions(action: {
  type: string;
  payload: IDetectionInput;
}) {
  const IMAGE_URL = action.payload.url;
  const OPTION_DETECTION = action.payload.detectOption as constants;

  try {
    if (
      clarifai.PAT &&
      clarifai.USER_ID &&
      clarifai.FACE_DETECTION &&
      clarifai.COLOR_DETECTION
    ) {
      const clarifaiModelPath =
        "https://api.clarifai.com/v2/models/" +
        clarifai[OPTION_DETECTION].MODEL_ID +
        "/versions/" +
        clarifai[OPTION_DETECTION].MODEL_VERSION_ID +
        "/outputs";

      const response: IResponseGenerator = yield call(
        fetchDetectionData,
        clarifaiModelPath,
        IMAGE_URL,
        clarifai.USER_ID,
        clarifai[OPTION_DETECTION].APP_ID,
        clarifai.PAT
      );
      yield put(getFaceDetectionInfoFullfiled(response.data.outputs[0].data));
    }
  } catch (error) {
    yield put(getFaceDetectionInfoRejected("Something went wrong"));
  }
}

function* getFaceDetectionRegions() {
  yield takeEvery(
    getFaceDetectionInfoPending.type,
    workedGetFaceDetectionRegions
  );
}

export default function* rootSaga() {
  yield all([call(getFaceDetectionRegions)]);
}
