import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './config/theme';
import FolderProvider from './context/useFolder/useFolder';
import EditorHeaderProvider from './context/useEditorHeader/useEditor';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <FolderProvider>
      <EditorHeaderProvider>
        <GlobalStyle />
        <App />
      </EditorHeaderProvider>
    </FolderProvider>
  </ThemeProvider>
);
