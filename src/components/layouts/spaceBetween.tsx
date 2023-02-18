import React, { ReactNode, useEffect } from "react";
import {motion} from 'framer-motion'

const variant = {
    initial: {
        marginTop: -100
    },

    animate:{
        marginTop: 0,
        transition: {
            duration: .4,
            type: "tween",
            // stiffness: 100
        }
    }
}

interface ISpaceBetweenProps{
    children: ReactNode
}

export const SpaceBetween: React.FC<ISpaceBetweenProps> = ({children}) =>{

    return (
        <>
            <motion.div
                variants={variant}
                initial="initial"
                animate="animate"
                style = {{marginTop:'0px'}}
                className='d-flex align-items-center justify-content-between p-2 border-bottom shadow bg-dark bg-gradient'>
                {children}
            </motion.div>
        </>
    )
}