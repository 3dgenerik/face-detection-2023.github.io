import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {InputGroup, Button} from 'react-bootstrap';
import { BsFillImageFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUrl } from './inputForm.slice';
import { setImageError } from '../imageAndInfoHandler/imageAndInfoHandler.slice';
import { ImageAndInfoHandler } from '../imageAndInfoHandler/ImageAndInfoHandler';
import { getBtnName } from './button.slice';
import { rootState } from '../../redux/store';
import axios from 'axios';


export const InputForm: React.FC  = () => {
    let {btnName} = useAppSelector((state:rootState) => state.btnName)
    const dispatch = useAppDispatch()


    const onInputTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(addUrl(e.currentTarget.value))
        dispatch(setImageError(false))
    }

    const onBtnClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        // dispatch(getBtnName(e.currentTarget.textContent || ''))

        const PAT:string = '2892ff31914145a18faea96e76e5a279';    
        const USER_ID:string = 'alp8fy50xt4v';       
        const APP_ID:string = 'face-detection-2023';
        const MODEL_ID:string = 'face-detection';
        const MODEL_VERSION_ID:string = '45fb9a671625463fa646c3523a3087d5';    
        const IMAGE_URL:string = 'https://images.newscientist.com/wp-content/uploads/2022/02/14174128/PRI_223554170.jpg?width=778';

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
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
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };

        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        // axios.get("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    }

    interface IData{
        regions: {
            region_info:{
                bounding_box: {
                    bottom_row: number,
                    left_col:number,
                    right_col: number,
                    top_row: number
                } 
            }            
        },
        id: string
    }

    interface IOutputs{
        created_ad?: string
        data: IData[],
        input:{
            data:{
                image:{
                    url: string
                }, 
                id: string
            }
        }
    }
    

    interface IFaceDetectionData{
        status:{
            outputs:IOutputs[]
        }
    }


    const getData = async (url: string) => {
        const response = await axios.get(url)
        const x = await response.data as IFaceDetectionData
    }
    

    return(
        <div style={{maxWidth:'1000px'}} className = 'm-auto p-3'>
            <InputGroup className="mb-3 mt-3 ">
                <InputGroup.Text className = 'p-3' id="basic-addon1"><BsFillImageFill /></InputGroup.Text>
                <Form.Control
                className = 'text-dark text-opacity-50'
                onChange={onInputTextChange}
                placeholder="...put image link here"
                aria-label="image"
                aria-describedby="basic-addon1"
                />
                <Button onClick={onBtnClick} className = 'px-5' variant="primary" id="button-addon2">Detect</Button>
            </InputGroup>

            <ImageAndInfoHandler/>
            
        </div>

    )
}

