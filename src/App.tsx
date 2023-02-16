import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import { Logo } from './components/logo/Logo';
import { SpaceBetween } from './components/layout/spaceBetween';
import { InputForm } from './features/inputForm/InputForm';
import { Rank } from './components/rank/Rank';
import { Options } from './features/options/Options';

function App() {
  return (
    <>
      <SpaceBetween>
        <Logo/>
        <Rank/>
        <Navigation/>
      </SpaceBetween>
      <Options/>
      <InputForm/>
    </>
  );
}

export default App;
