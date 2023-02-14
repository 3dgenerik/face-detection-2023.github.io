import React from "react";
import { Button } from "react-bootstrap";
import { getFaceDetectionInfoPending } from "./button.slice";
import { useAppDispatch} from "../../redux/hooks";

interface IButtonFormProp{
    url: string
}

export const ButtonForm: React.FC<IButtonFormProp> = ({url}) => {

    const dispatch = useAppDispatch()

    const onBtnClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        dispatch(getFaceDetectionInfoPending(url))
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