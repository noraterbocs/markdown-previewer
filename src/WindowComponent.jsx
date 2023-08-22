/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { SiEditorconfig } from 'react-icons/si'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { Preview } from './Preview';

export const WindowComponent = ({ headerName, text, setText }) => {
  const [fullscreen, setFullscreen] = useState(false)
  const fullscreenHandler = () => {
    setFullscreen(!fullscreen)
  }
  return (
    <section className={fullscreen ? 'fullscreen' : `${headerName}-container`}>
      <header className={`${headerName}-header`}>
        <p className="header-text"><SiEditorconfig /><span>{headerName}</span></p>
        <AiOutlineFullscreen onClick={fullscreenHandler} style={{ display: fullscreen ? 'none' : 'flex' }} />
        <AiOutlineFullscreenExit onClick={fullscreenHandler} style={{ display: fullscreen ? 'flex' : 'none' }} />
      </header>
      {headerName === 'editor'
        && <textarea
          id="editor"
          className="editor"
          value={text}
          onChange={(event) => setText(event.target.value)} />}
      {headerName === 'preview' && <div className="preview">
        <Preview key={text} text={text} />
      </div>}
    </section>
  );
}
