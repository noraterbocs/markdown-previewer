/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
/* es-lint disable react/jsx-closing-bracket-location */

import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useText } from '../context/WindowComponent.context';

export const Preview = () => {
  const { text } = useText();
  const codeRenderer = {
    code({ inline, className, children }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={dark}
          language={match[1]}
          PreTag="div" />
      ) : (
        <code className="inline-code">
          {children}
        </code>
      )
    }
  }

  return (
    <ReactMarkdown
      children={text}
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={codeRenderer} />
  )
}
