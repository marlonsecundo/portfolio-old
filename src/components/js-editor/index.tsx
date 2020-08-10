import React, { useEffect, useState, useRef } from 'react';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';

import 'highlight.js/styles/arta.css';
import { Pre, Code } from './styles';
import { jscode } from './codes';

hljs.registerLanguage('typescript', javascript);
hljs.initHighlightingOnLoad();

const JSEditor: React.FC = () => {
  const [text, setText] = useState('');
  const codeTagRef = useRef<HTMLPreElement>(null);

  const [bar, setBar] = useState('|');

  useEffect(() => {
    setInterval(() => {
      setText((prev) => jscode.substring(0, prev.length + 1));
      // eslint-disable-next-line no-unused-expressions
      codeTagRef.current?.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }, 50);
  }, []);

  useEffect(() => {
    if (text !== jscode) setBar('|');
    else setBar('');
  }, [text]);

  return (
    <Pre ref={codeTagRef}>
      <Code className="language-typescript">{text + bar}</Code>
    </Pre>
  );
};
export default JSEditor;
