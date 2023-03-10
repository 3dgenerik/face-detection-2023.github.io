import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rootState } from "../../redux/store";
import { setImageError } from "./imageAndInfoHandler.slice";
import { BoundingBoxesWrapper } from "../../components/boundingBox/BoundingBoxesWrapper";
import { constants } from "../../config";
import { ColorPallete } from "../../components/colorPalette/ColorPallete";

interface IImageAndInfoHandler{
    url: string
}

export const ImageAndInfoHandler: React.FC<IImageAndInfoHandler> = ({url}) => {
    const {isLoaded, optionSelection, error} = useAppSelector((state:rootState) => state.faceDetectionInfo)
    const {detectionOption} = useAppSelector((state:rootState) => state.option)
    
    const {imgLoadingError} = useAppSelector((state:rootState) => state.imgError)

    const dispatch = useAppDispatch()

    const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        dispatch(setImageError(true))
      };
    
    return (
        <div>
            <div className = {`${imgLoadingError ? 'bg-danger border-danger' : 'bg-light'} d-flex justify-content-center align-items-center bg-opacity-25 p-2 p-sm-3 mt-2 mt-sm-4 shadow-sm border rounded-2`}>
                {
                    url
                        ?
                        !imgLoadingError
                            ?
                            isLoaded
                                ?
                                <div className='text-secondary fw-bold'>{`${detectionOption===constants.FACE_DETECTION ? '...finding region(s)' : '...finding color(s)'}`}</div>
                                :
                                <>
                                    <div style = {{position:'relative'}} className=''>
                                        <div className = 'rounded-2 overflow-hidden shadow-sm'>
                                            <img
                                                className='w-100' 
                                                src = {url}
                                                alt='image' 
                                                onError={imageOnErrorHandler}
                                            />
                                        </div>
                                        {
                                            detectionOption===constants.FACE_DETECTION && optionSelection.regions && <BoundingBoxesWrapper regions={optionSelection.regions}/>        
                                        }
                                        {
                                            detectionOption===constants.COLOR_DETECTION && optionSelection.colors && optionSelection.colors.length > 0 && <ColorPallete colors={optionSelection.colors}/>
                                        }
                                    </div>
                                </>
                            :
                            <div className='text-danger fw-bold'>Oops, wrong url. Please use correct one.</div>
                        :
                        <div className='text-secondary fw-bold'>Field is empty.</div>
                }
            </div>
        </div>
    )
}