import React, { ReactNode, useEffect, useState } from 'react'
import { changeDetectOption } from './options.slice'
import { useAppDispatch } from '../../redux/hooks'
import { constants } from '../../constants'
import { clearRegions } from '../buttonForm/button.slice'
import { TbFaceId as Face } from "react-icons/tb";
import { IoMdColorWand as Color } from "react-icons/io";
import { IconType } from 'react-icons/lib'

//<OptionButton btnName='Face detection' optionName={constants.FACE_DETECTION} detectName = "face"><TbFaceId size={30} color="#0088ff"/></OptionButton>
//<OptionButton btnName='Color detection' optionName={constants.COLOR_DETECTION} detectName = "color"><IoMdColorWand size={30} color="#0088ff"/></OptionButton>


interface IOptionButton{
    btnName: string,
}

interface IButtons{
    constant:constants, icon: JSX.Element
}

const buttons:IButtons[] = [
    {constant: constants.FACE_DETECTION, icon: <Face size={30} color="#0088ff"/> }, 
    {constant: constants.COLOR_DETECTION, icon: <Color size={30} color="#0088ff"/> }
]


export const OptionButton: React.FC<IOptionButton> = ({btnName}) => {
    const [buttonState, setButtonState] = useState<constants>(constants.FACE_DETECTION)
    const dispatch = useAppDispatch()

    const onOptionChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, optionName:constants) => {
        e.preventDefault()
        setButtonState(e.currentTarget.title as constants);
        dispatch(changeDetectOption(optionName))
        dispatch(clearRegions())

    }
    // console.log(buttonState);

    const createButton = buttons.map((btn:IButtons, idx:number) => {
        //REFACTOR
        return <div
                    key = {idx}
                    onClick={(e) => onOptionChange(e, btn.constant)}
                    style={{ backgroundColor: btn.constant===buttonState ? '#0088ff' : '#eee', transition:'all .3s cubic-bezier(.36,.07,.19,.97)', paddingRight: btn.constant===buttonState ? '50px' : '0px'}}
                    className={`d-flex align-items-center py-1 rounded-3 ${btn.constant===buttonState ? 'text-light' : 'text-dark' }`} role="button" title = {btn.constant}>
                    <div style = {{backgroundColor:'#fff'}} className=' border rounded-2 p-1 mx-1'>
                        {btn.icon}
                    </div>
                    <div style = {{fontSize:'.8rem'}} className = 'ps-2 pe-5 fw-bold'>{btn.constant.toLowerCase().split("_").join(" ")}</div>
                </div>    
    })


    return (
        <>
            {createButton}
        </>
    )
}