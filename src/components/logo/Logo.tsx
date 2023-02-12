import React, {useState} from "react";
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'


const svgVariants = {
    initial: {
        marginLeft:-100,
        rotate:-180,
    },

    animate: {
        marginLeft:0,
        rotate:0,
        transition: {
            duration: .6,
            type:"spring",
            stiffness:200
        }
    }
}

export const Logo: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false)
    
    return(
        <Tilt scale={1.1} transitionSpeed={1500} perspective={100}>
            <motion.div
                variants={svgVariants}
                initial="initial"
                animate="animate"
                style = {{width:'70px', height:'70px'}}
                >
                <img className = 'mw-100' src="assets/brain-svgrepo-com.svg" alt = 'brain'/>
            </motion.div>
        </Tilt>
    )
}