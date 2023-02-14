import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {InputGroup} from 'react-bootstrap';
import { BsFillImageFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUrl } from './inputForm.slice';
import { setImageError } from '../imageAndInfoHandler/imageAndInfoHandler.slice';
import { ImageAndInfoHandler } from '../imageAndInfoHandler/ImageAndInfoHandler';
import { ButtonForm } from '../buttonForm/ButtonForm';
import { rootState } from '../../redux/store';

export const InputForm: React.FC  = () => {
    const {inputUrl} = useAppSelector((state:rootState) => state.inputForm)

    const dispatch = useAppDispatch()


    const onInputTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(addUrl(e.currentTarget.value))
        dispatch(setImageError(false))
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
                <ButtonForm url = {inputUrl}/>
            </InputGroup>
            <ImageAndInfoHandler url = {inputUrl}/>
            
        </div>

    )
}

