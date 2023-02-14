import React from "react";
import { Button } from "react-bootstrap";
import { IFaceDetectionData } from "./button.interface";
import { constants } from "../../constants";
import { getFaceDetectionInfo } from "./button.slice";
import { useAppDispatch} from "../../redux/hooks";

interface IButtonFormProp{
    url: string
}

export const ButtonForm: React.FC<IButtonFormProp> = ({url}) => {

    const dispatch = useAppDispatch()

    const onBtnClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const IMAGE_URL:string = url;

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": constants.USER_ID,
                "app_id": constants.APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + constants.PAT
            },
            body: raw
        };

        fetch("https://api.clarifai.com/v2/models/" + constants.MODEL_ID + "/versions/" + constants.MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.json())
            .then((result:IFaceDetectionData) => {
                return dispatch(getFaceDetectionInfo(result.outputs[0]?.data.regions))
            })
            .catch(error => console.log('error', error));
    }

    return(
        <Button
            onClick={onBtnClick} 
            className = 'px-5' 
            variant="primary" 
            id="button-addon2"
            >Detect</Button>
    )
}