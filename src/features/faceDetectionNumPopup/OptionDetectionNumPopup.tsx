import React from 'react'
import {motion} from 'framer-motion'
import { useAppSelector } from '../../redux/hooks'
import { rootState } from '../../redux/store'

interface IOptionDetectionNumPopupProps{
    selectionNum: number,
    option: string
}

const variant = {
    start:{
        bottom:-60,
        transition:{
            duration: 1,
            type:"spring",
            stiffness:230
        }
    },

    end:{
        bottom:20,
        transition:{
            duration: 1,
            type:"spring",
            stiffness:230
        }
    }
}

export const OptionDetectionNumPopup: React.FC<IOptionDetectionNumPopupProps> = ({selectionNum, option}) => {
    const {isPopedUp} = useAppSelector((state:rootState) => state.faceDetectionNumPopupBool)
    return (
        <motion.div
            variants={variant}
            animate = {(isPopedUp&&selectionNum>0) ? "end" : "start"}
            style = {{position:'fixed', left:'20px', bottom: '-60px', backgroundColor:'#ffedb3', color:'#bb8f00'}}
            className='p-2 border border-warning rounded-3'
            >There are <span className = 'fw-bold'>{selectionNum}</span> {option} detected.
        </motion.div>
    )
}