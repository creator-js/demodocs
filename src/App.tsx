import React from 'react';
import { Header } from './components/features/Header/Header';
import { Scene } from './components/features/Scene';
import { InteractiveEditor } from './components/features/Editor';
import { StepsSettings } from './components/features/Settings/StepsSettings';

export const App = () => {
  return (
    <div className='dg__app'>
      <Header/>
      <main className='dg__main'>
        <Scene>
          <InteractiveEditor />
        </Scene>
        <StepsSettings/>
      </main>
    </div>
  );
};
