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



function App() {
  const {route} = useAppSelector((state:rootState) => state.route)
  return (
    <>
      {route==="signin"
        ?
        <Signin/>
        :
        <>
          <SpaceBetween>
            <Logo/>
            <Rank/>
            <Navigation/>
          </SpaceBetween>
          <Options/>
          <InputForm/>
        </>
      }
    </>
  );
}

export default App;
