export interface IRegions{
    region_info:{
        bounding_box: {
            bottom_row: number,
            left_col:number,
            right_col: number,
            top_row: number
        } 
    }            
}

export interface IColors{
    raw_hex: string,
    value: number,
    w3c:{
       hex: string,
       name: string 
    }          
}

export interface  IData{
    regions: IRegions[],
    colors: IColors[]    
}

 export interface IOutputs{
    data: IData,
    input:{
        data:{
            image:{
                url: string
            }, 
        }
    }
}

export interface IFaceDetectionData{
    outputs:IOutputs[]
}