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
                <Button className = 'px-5' variant="primary" id="button-addon2">Detect</Button>
            </InputGroup>
            
            {/* Napraviti posebnu komponentu */}

            {

                <div className = {`${imgError ? 'bg-danger border-danger' : 'bg-light'} bg-opacity-25 p-3 mt-4 shadow-sm border rounded-2`}>
                    {
                        inputUrl
                        ?
                        !imgError
                            ?
                            <img
                                className='w-100' 
                                src = {inputUrl} 
                                alt='image' 
                                onError={imageOnErrorHandler}
                            />
                            :
                            <div className='text-danger fw-bold'>Oops, wrong url. Please use correct one.</div>
                        :
                        <div className='text-secondary fw-bold'>Field is empty.</div>
                    }
                </div>
            }
        </div>

    )
}

