import React from "react";
import { motion } from 'framer-motion';

const variants = {
    initial: {
        marginTop:0,
        opacity:0
    },

    animate: {
        opacity:1,
        marginTop:30,
        transition: {
            duration: .3,
            type:'tween',
            delay:.4
        }
    }
}

export const Rank: React.FC = () => {
    return(
        <motion.div
            style = {{marginTop:'30px'}}
            variants={variants}
            initial="initial"
            animate="animate"
            className="text-center">
            <div className='text-secondary display-5'>
                Hi <span className = "">Jovica</span>, your current rank is <span className='fw-bold text-primary'>#5</span>
            </div>
        </motion.div>
    )
}

