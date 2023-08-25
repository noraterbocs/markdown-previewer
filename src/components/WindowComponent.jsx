/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { MdPreview, MdOutlineEdit } from 'react-icons/md'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { Preview } from './Preview';
import { useText } from '../context/WindowComponent.context';

export const WindowComponent = ({ headerName }) => {
  const { text, setText } = useText();
  const [fullscreen, setFullscreen] = useState(false)
  const fullscreenHandler = () => {
    setFullscreen(!fullscreen)
  }
  return (
    <section className={fullscreen ? 'fullscreen' : `${headerName}-container`}>
      <header className={`${headerName}-header`}>
        <p className="header-text">
          {headerName === 'editor' ? <MdOutlineEdit className="icon" /> : <MdPreview className="icon" />}
          <span>{headerName.charAt(0).toUpperCase() + headerName.slice(1)}</span>
        </p>
        <AiOutlineFullscreen className="icon" onClick={fullscreenHandler} style={{ display: fullscreen ? 'none' : 'flex' }} />
        <AiOutlineFullscreenExit className="icon" onClick={fullscreenHandler} style={{ display: fullscreen ? 'flex' : 'none' }} />
      </header>
      {headerName === 'editor'
        ? <textarea
          id="editor"
          className="editor"
          value={text}
          onChange={(event) => setText(event.target.value)} />
        : <div id="preview" className="preview">
          <Preview key={text} />
        </div>}
    </section>
  );
}
