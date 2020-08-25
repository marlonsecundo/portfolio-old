import React, { useEffect, useState, useRef, useCallback } from 'react';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/typescript';

import 'highlight.js/styles/arta.css';
import { AnimateSharedLayout } from 'framer-motion';
import { Pre, Code } from './styles';
import { jscode } from './codes';

hljs.registerLanguage('typescript', javascript);
hljs.initHighlightingOnLoad();

const JSEditor: React.FC = () => {
  const [text, setText] = useState('');
  const codeTagRef = useRef<HTMLPreElement>(null);

  const [bar, setBar] = useState('|');

  const updateHighlight = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    codeTagRef.current?.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setText((prev) => {
        if (prev === jscode) {
          return prev;
        }

        return jscode.substring(0, prev.length + 1);
      });
    }, 25);
  }, []);

  useEffect(() => {
    updateHighlight();

    if (text === jscode) setBar('');
  }, [text]);

  useEffect(() => {
    updateHighlight();
  }, [bar]);

  return (
    <Pre ref={codeTagRef}>
      <Code className="language-typescript">{text + bar}</Code>
    </Pre>
  );
};
export default JSEditor;
