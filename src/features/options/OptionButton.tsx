import React, { ReactNode } from 'react'
import { changeDetectOption } from './options.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { rootState } from '../../redux/store'
import { constants } from '../../constants'
import { clearRegions } from '../buttonForm/button.slice'

interface IOptionButton{
    children: ReactNode,
    btnName: string,
    optionName: constants
}

export const OptionButton: React.FC<IOptionButton> = ({children, btnName, optionName}) => {
    const dispatch = useAppDispatch()

    const onOptionChange = (option: constants) => {
        dispatch(changeDetectOption(option))
        dispatch(clearRegions())
    }

    return (
        <div onClick={() => onOptionChange(optionName)} className='d-flex align-items-center bg-light py-1 rounded-3'>
            <div style = {{backgroundColor:'#fff'}} className=' border rounded-2 p-1 mx-1'>
                {children}
            </div>
            <div style = {{fontSize:'.8rem'}} className = 'ps-2 pe-5 fw-bold'>{btnName}</div>
        </div>
    )
}