import React, {useState} from 'react';
import { Navigation } from './components/navigation/Navigation';
import { Logo } from './components/logo/Logo';
import { SpaceBetween } from './components/layout/spaceBetween';
import { InputForm } from './features/inputForm/InputForm';
import { Rank } from './components/rank/Rank';
import { Options } from './features/options/Options';
import { useAppSelector } from './redux/hooks';

import { Signin } from './features/signin/Signin';
import { rootState } from './redux/store';
import { Registration } from './features/registration/Registration';

//React Router in Depth #2 - React Router Basics

import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path='/signin' element={<Signin/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route
        path='/'
        element={
          <>
            <SpaceBetween>
              <Logo/>
              <Rank/>
              <Navigation/>
            </SpaceBetween>
            <Options/>
            <InputForm/>
          </>
        }/>
    </Route>
  )
)

function App() {
  const {route} = useAppSelector((state:rootState) => state.route)
  return (
      <>
        <RouterProvider router={router}/>
      </>
    )
  }
  
  export default App;
  
