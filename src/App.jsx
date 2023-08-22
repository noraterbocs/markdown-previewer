import React, { useState } from 'react';
import './App.css';
import { WindowComponent } from './WindowComponent';
import data from './data.json'

const App = () => {
  const [text, setText] = useState(data.markup)
  return (
    <div className="app-container">
      <WindowComponent headerName="editor" text={text} setText={setText} />
      <WindowComponent headerName="preview" text={text} setText={setText} />
    </div>
  );
}

export default App;