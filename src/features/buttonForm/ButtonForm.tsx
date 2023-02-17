import React from "react";
import { Button } from "react-bootstrap";
import { getFaceDetectionInfoPending } from "./button.slice";
import { useAppDispatch, useAppSelector} from "../../redux/hooks";
import { setIsPopedUp } from "../faceDetectionNumPopup/optionDetectionNumPopup.slice";
import { rootState } from "../../redux/store";
import { IoMdQrScanner } from 'react-icons/io'

interface IButtonFormProp{
    url: string
}

export const ButtonForm: React.FC<IButtonFormProp> = ({url}) => {
    const {detectionOption} = useAppSelector((state:rootState) => state.option)


    const dispatch = useAppDispatch()

    const onBtnClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(getFaceDetectionInfoPending({url, detectOption:detectionOption}))
        dispatch(setIsPopedUp(true))
    }

    return(
        <Button
            onClick={onBtnClick} 
            className = 'px-3 px-sm-5 d-flex justify-content-center align-items-center' 
            variant="primary" 
            id="button-addon2"
            ><IoMdQrScanner className = "me-2" color={"#fff"}/>Detect</Button>
    )
}