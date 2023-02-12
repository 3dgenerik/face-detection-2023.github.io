import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {InputGroup, Button} from 'react-bootstrap';
import { BsFillImageFill } from "react-icons/bs";

export const InputForm: React.FC  = () => {

    return(
        <InputGroup className="mb-3 container mt-5">
            <InputGroup.Text className = 'p-3' id="basic-addon1"><BsFillImageFill /></InputGroup.Text>
            <Form.Control
            // onChange={onInputTextChange}
            placeholder="...put image link here"
            aria-label="image"
            aria-describedby="basic-addon1"
            />
            <Button className = 'px-5' variant="primary" id="button-addon2">Detect</Button>
      </InputGroup>

    )
}

