import React from 'react'
import { IRegions, IColors } from '../../features/buttonForm/button.interface'
import { BoundingBox } from './BoundingBox'

interface IBoundingBoxesWrapperProps{
    optionSelection: IRegions[]
}

export const BoundingBoxesWrapper: React.FC<IBoundingBoxesWrapperProps> = ({optionSelection}) => {

    const boundingBoxes = optionSelection.map((region:IRegions, idx:number) =>{
        const top_row = region.region_info.bounding_box.top_row * 100
        const left_col = region.region_info.bounding_box.left_col * 100
        const right_col = (1.0 - region.region_info.bounding_box.right_col) * 100
        const bottom_row = (1.0 - region.region_info.bounding_box.bottom_row) * 100

        return <BoundingBox
            key = {idx} 
            regionsLength = {optionSelection.length} 
            idx={idx} 
            top_row = {top_row} 
            left_col = {left_col} 
            right_col={right_col} 
            bottom_row={bottom_row}/>
            
    })

    return(
       <>
        {boundingBoxes}
       </>
    )
}