import React from 'react'
import {motion} from 'framer-motion'
import { useAppSelector } from '../../redux/hooks'
import { rootState } from '../../redux/store'

interface IFaceDetectionNumPopupProps{
    regionNum: number
}

const variant = {
    start:{
        bottom:-60,
        trtansition:{
            duration: 1,
            type:"spring",
            // stiffness:300
        }
    },

    end:{
        bottom:20,
        trtansition:{
            duration: 1,
            type:"spring",
            // stiffness:300
        }
    }
}

export const FaceDetectionNumPopup: React.FC<IFaceDetectionNumPopupProps> = ({regionNum}) => {
    const {isPopedUp} = useAppSelector((state:rootState) => state.faceDetectionNumPopupBool)
    return (
        <motion.div
            variants={variant}
            animate = {isPopedUp ? "end" : "start"}
            style = {{position:'fixed', left:'20px', bottom: '20px'}}
            className='p-2 border bg-warning border-warning rounded-3 bg-opacity-25 text-secondary'
            >There are <span className = 'fw-bold'>{regionNum}</span> face(s) detected.
        </motion.div>
    )
}