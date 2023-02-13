import React from 'react';
import { Navigation } from './components/navigation/Navigation';
import { Logo } from './components/logo/Logo';
import { SpaceBetween } from './components/layout/spaceBetween';
import { InputForm } from './features/inputForm/InputForm';
import { Rank } from './components/rank/Rank';

function App() {
  return (
    <>
      <SpaceBetween>
        <Logo/>
        <Navigation/>
      </SpaceBetween>
      <Rank/>
      <InputForm/>
    </>
  );
}

export default App;
