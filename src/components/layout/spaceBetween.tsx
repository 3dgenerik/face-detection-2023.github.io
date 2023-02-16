import React, { ReactNode } from "react";

interface ISpaceBetweenProps{
    children: ReactNode
}

export const SpaceBetween: React.FC<ISpaceBetweenProps> = ({children}) =>{
    return (
        <div 
            // style={{backgroundColor:'#333444'}}
            className='d-flex align-items-center justify-content-between p-3 border-bottom shadow bg-dark bg-gradient'>
            {children}
        </div>
    )
}