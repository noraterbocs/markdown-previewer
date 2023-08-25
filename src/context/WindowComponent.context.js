import React, { createContext, useContext, useState } from 'react';
import data from '../data.json'

export const TextContext = createContext();

// custom hook:
export const useText = () => {
  return useContext(TextContext)
}

export const TextProvider = ({ children }) => {
  const [text, setText] = useState(data.markup)
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}

