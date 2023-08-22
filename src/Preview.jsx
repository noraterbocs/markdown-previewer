import React from 'react';
import ReactMarkdown from 'react-markdown'

export const Preview = ({ text }) => {
  console.log(text)
  return (
    <ReactMarkdown>{text}
    </ReactMarkdown>
  )
}
