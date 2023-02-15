import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rootState } from "../../redux/store";
import { setImageError } from "./imageAndInfoHandler.slice";
import { IRegions } from "../buttonForm/button.interface";
import { BoundingBox } from "../../components/layout/boundingBox/BoundingBox";

interface IImageAndInfoHandler{
    url: string
}

export const ImageAndInfoHandler: React.FC<IImageAndInfoHandler> = ({url}) => {
    const {isLoaded, regions, error} = useAppSelector((state:rootState) => state.faceDetectionInfo)
    const {imgLoadingError} = useAppSelector((state:rootState) => state.imgError)

    const dispatch = useAppDispatch()

    const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        dispatch(setImageError(true))
      };

    console.log(regions)

    const boundingBoxes = regions.map((region:IRegions, idx:number) =>{
        const top_row = region.region_info.bounding_box.top_row * 100
        const left_col = region.region_info.bounding_box.left_col * 100
        const right_col = (1.0 - region.region_info.bounding_box.right_col) * 100
        const bottom_row = (1.0 - region.region_info.bounding_box.bottom_row) * 100

        return <BoundingBox idx={idx} top_row = {top_row} left_col = {left_col} right_col={right_col} bottom_row={bottom_row}/>
    })

    return (
            <div className = {`${imgLoadingError ? 'bg-danger border-danger' : 'bg-light'} d-flex justify-content-center align-items-center bg-opacity-25 p-3 mt-4 shadow-sm border rounded-2`}>
                {
                    url
                        ?
                        !imgLoadingError
                            ?
                            isLoaded
                                ?
                                <div className='text-secondary fw-bold'>...finding region(s)</div>
                                :
                                <>
                                    <div style = {{position:'relative'}}>
                                        <img
                                            className='w-100' 
                                            src = {url}
                                            alt='image' 
                                            onError={imageOnErrorHandler}
                                        />
                                        {boundingBoxes}
                                    </div>
                                </>
                            :
                            <div className='text-danger fw-bold'>Oops, wrong url. Please use correct one.</div>
                        :
                        <div className='text-secondary fw-bold'>Field is empty.</div>
                }
            </div>
    )
}