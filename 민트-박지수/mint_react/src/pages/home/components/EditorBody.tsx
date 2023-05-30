import React, { useEffect, useState } from 'react';
import * as E from './EditorBody.styled';
import { useEditor } from '../../../context/useEditorHeader/useEditor';

const EditorBody = () => {
  const { activeFile } = useEditor();
  const [text, setText] = useState('');
  useEffect(() => {
    if (activeFile) {
      (async () => {
        const file = await activeFile.fileHandle?.getFile();
        const text = (await file?.text()) || '';
        setText(text);
      })();
    }
  }, [activeFile]);
  return <E.EditorBody>{text}</E.EditorBody>;
};

export default EditorBody;
