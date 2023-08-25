/* eslint-disable import/no-cycle */
import React from 'react';
import './style/App.scss';
import { WindowComponent } from './components/WindowComponent';
import { TextProvider } from './context/WindowComponent.context';

const App = () => {
  return (
    <TextProvider>
      <div className="app-container">
        <WindowComponent headerName="editor" />
        <WindowComponent headerName="preview" />
      </div>
    </TextProvider>
  );
}

export default App;
