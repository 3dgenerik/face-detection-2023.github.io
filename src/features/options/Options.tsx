import React from 'react'
import { OptionButton } from './OptionButton';
import { motion } from 'framer-motion';

const variants = {
    initial: {
       opacity:0
    },

    animate: {
        opacity:1,
        transition: {
            duration: .6,
            delay:.4
        }
    }
}

export const Options: React.FC = ()=>{
    return(
        <motion.div
            variants={variants}
            initial = "initial"
            animate = "animate"
            style = {{backgroundColor:'#fff'}}
            className='p-2 border d-flex flex-row gap-2 shadow justify-content-center'>
            <OptionButton btnName='Face detection'></OptionButton>
        </motion.div>
    )
}