import React from 'react'
import { TbFaceId } from "react-icons/tb";
import { IoMdColorWand } from "react-icons/io";
import { OptionButton } from './OptionButton';
import { constants } from '../../constants';

export const Options: React.FC = ()=>{
    return(
        <div style = {{backgroundColor:'#fff'}} className='p-2 border d-flex flex-row gap-2 shadow justify-content-center'>
                <OptionButton btnName='Face detection' optionName={constants.FACE_DETECTION}><TbFaceId size={30} color="#0088ff"/></OptionButton>
                <OptionButton btnName='Color detection' optionName={constants.COLOR_DETECTION}><IoMdColorWand size={30} color="#0088ff"/></OptionButton>
        </div>
    )
}