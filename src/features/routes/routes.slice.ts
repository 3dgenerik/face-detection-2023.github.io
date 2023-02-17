import { createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IInitialState{
    route: string
}

const initialState: IInitialState = {
    route: 'signin'
}

const routesSlice = createSlice({
    name:'routes',
    initialState, 
    reducers:{
        changeRoute: ((state:IInitialState, action: PayloadAction<string>) => {
            state.route = action.payload
        })
    }
})

export default routesSlice.reducer
export const {changeRoute} = routesSlice.actions
