import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rootState } from "../../redux/store";
import { setImageError } from "./imageAndInfoHandler.slice";

interface IImageAndInfoHandler{
    url: string
}

export const ImageAndInfoHandler: React.FC<IImageAndInfoHandler> = ({url}) => {
    const {imgLoadingError} = useAppSelector((state:rootState) => state.imgError)
    const {regions} = useAppSelector((state:rootState) => state.faceDetectionInfo)

    const dispatch = useAppDispatch()

    const imageOnErrorHandler = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
      ) => {
        dispatch(setImageError(true))
      };

    // console.log(regions[0]?.region_info.bounding_box)

    return (
            <div className = {`${imgLoadingError ? 'bg-danger border-danger' : 'bg-light'} bg-opacity-25 p-3 mt-4 shadow-sm border rounded-2`}>
                {
                    url
                    ?
                    !imgLoadingError
                        ?
                        <img
                            className='w-100' 
                            src = {url} 
                            alt='image' 
                            onError={imageOnErrorHandler}
                        />
                        :
                        <div className='text-danger fw-bold'>Oops, wrong url. Please use correct one.</div>
                    :
                    <div className='text-secondary fw-bold'>Field is empty.</div>
                }
            </div>
    )
}