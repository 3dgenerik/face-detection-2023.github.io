import React from 'react'
import { OptionButton } from './OptionButton';

export const Options: React.FC = ()=>{
    return(
        <div style = {{backgroundColor:'#fff'}} className='p-2 border d-flex flex-row gap-2 shadow justify-content-center'>
            <OptionButton btnName='Face detection'></OptionButton>
        </div>
    )
}