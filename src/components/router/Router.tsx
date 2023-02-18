import { Navigation } from '../navigation/Navigation';
import { Logo } from '../logo/Logo';
import { SpaceBetween } from '../layouts/spaceBetween';
import { InputForm } from '../../features/inputForm/InputForm';
import { Rank } from '../rank/Rank';
import { Options } from '../../features/options/Options';

import { Signin } from '../../features/signin/Signin';
import { Registration } from '../../features/registration/Registration';
import { SigninAndRegistrationWrapper } from '../../layouts/SigninAndRegistrationWrapper.layout';
import { routers } from '../../config';
import { Navigate } from 'react-router-dom';


import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  Routes
} from "react-router-dom"

export const router =   createHashRouter(
    //first argument
    createRoutesFromElements(
      <Route>
        <Route index path='/' element={<Navigate to='signin'/>}/>
        <Route element={<SigninAndRegistrationWrapper/>}>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Route>

        <Route path='/home' element={
          <>
            <SpaceBetween>
              <Logo/>
              <Navigation/>
            </SpaceBetween>
            <Options/>
            <Rank/>
            <InputForm/>
          </>
        }/>
      </Route>

    ),
    //second argument
    {
      basename: routers.PROJECT_NAME,
    }
  )