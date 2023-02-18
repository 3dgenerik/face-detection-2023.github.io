//TODO
//refactoring

export interface IRecognition{
    APP_ID: string,
    MODEL_ID:string,
    MODEL_VERSION_ID:string
}

export interface IClarifai{
    PAT:string,
    USER_ID:string,
    FACE_DETECTION: IRecognition,
    COLOR_DETECTION: IRecognition
}

export const clarifai: IClarifai = {
    PAT:'2892ff31914145a18faea96e76e5a279', 
    USER_ID:'alp8fy50xt4v',
    FACE_DETECTION:{
        APP_ID:'face-detection-2023',
        MODEL_ID:'face-detection',
        MODEL_VERSION_ID:'45fb9a671625463fa646c3523a3087d5'    
    },
    COLOR_DETECTION:{
        APP_ID:'color-detection-2023',
        MODEL_ID:'color-recognition',
        MODEL_VERSION_ID:'dd9458324b4b45c2be1a7ba84d27cd04'    
    }
}

export enum constants{
    FACE_DETECTION =  "FACE_DETECTION",
    COLOR_DETECTION = "COLOR_DETECTION",
}

export enum routers{
    PROJECT_NAME = "/face-detection-2023.github.io/"
}