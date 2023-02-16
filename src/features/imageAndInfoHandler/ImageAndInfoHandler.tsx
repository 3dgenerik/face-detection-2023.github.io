import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rootState } from "../../redux/store";
import { setImageError } from "./imageAndInfoHandler.slice";
import { BoundingBoxesWrapper } from "../../components/boundingBox/BoundingBoxesWrapper";

interface IImageAndInfoHandler{
    url: string
}

export const ImageAndInfoHandler: React.FC<IImageAndInfoHandler> = ({url}) => {
    const {isLoaded, optionSelection, error} = useAppSelector((state:rootState) => state.faceDetectionInfo)
    const {imgLoadingError} = useAppSelector((state:rootState) => state.imgError)

    const dispatch = useAppDispatch()

    const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        dispatch(setImageError(true))
      };

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
                                        <BoundingBoxesWrapper optionSelection={optionSelection}/>
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