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

 interface IOutputs{
    data: {
        regions: IRegions[]
    },
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