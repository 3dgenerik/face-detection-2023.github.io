import React from 'react';
import './app.scss'
import {RouterProvider} from "react-router-dom"
import { router } from './router/Router';

const App = () => {
  // const {route} = useAppSelector((state:rootState) => state.route)
  return (
      <>
        <RouterProvider router={router}/>
      </>
      )
  }
  export default App;
  
