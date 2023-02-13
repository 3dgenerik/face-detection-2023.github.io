import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {InputGroup, Button} from 'react-bootstrap';
import { BsFillImageFill } from "react-icons/bs";

export const InputForm: React.FC  = () => {
    const [inputUrl, setInputUrl] = useState<string>('')
    const [imgError, setImgError] = useState<boolean>(false)

    const onInputTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setInputUrl(e.currentTarget.value)
        setImgError(false)
    }

    const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        // event.currentTarget.src = FALLBACK_IMAGE;
        // event.currentTarget.className = "error";
        setImgError(true)
      };


    return(
        <>
            <InputGroup className="mb-3 container mt-5">
                <InputGroup.Text className = 'p-3' id="basic-addon1"><BsFillImageFill /></InputGroup.Text>
                <Form.Control
                onChange={onInputTextChange}
                placeholder="...put image link here"
                aria-label="image"
                aria-describedby="basic-addon1"
                />
                <Button className = 'px-5' variant="primary" id="button-addon2">Detect</Button>
            </InputGroup>
            
            {/* Napraviti posebnu komponentu */}
            <div className = 'm-3 bg-light p-3 mt-4 shadow-sm border border'>
                {
                    inputUrl && !imgError
                    ?
                    <img
                        className='w-100' 
                        src = {inputUrl} 
                        alt='image' 
                        onError={imageOnErrorHandler}
                        />
                    :
                    <div className='text-danger fw-bold'>Oops, wrong url. Please use correct one.</div>
                }
            </div>
        </>

    )
}

