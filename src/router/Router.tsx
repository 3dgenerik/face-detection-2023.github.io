import { Navigation } from '../components/navigation/Navigation';
import { Logo } from '../components/logo/Logo';
import { SpaceBetween } from '../components/layouts/spaceBetween';
import { InputForm } from '../features/inputForm/InputForm';
import { Rank } from '../components/rank/Rank';
import { Options } from '../features/options/Options';

import { Signin } from '../features/signin/Signin';
import { Registration } from '../features/registration/Registration';
import { SigninAndRegistrationWrapper } from '../layouts/SigninAndRegistrationWrapper.layout';
import { routers } from '../constants';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

export const router = createBrowserRouter(
    //first argument
    createRoutesFromElements(
      <Route>
  
        <Route path='/' element={
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
  
        <Route element={<SigninAndRegistrationWrapper/>}>
          <Route index path='/signin' element={<Signin/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Route>
  
      </Route>
    
    ),
    //second argument
    {
      basename: routers.PROJECT_NAME
    }
  )