import React, { useState } from 'react';
import * as H from './Home.styled';
import { MenuType } from '../../types/types';
import FileExplorer from './components/FileExplorer';
import SideBar from './components/SideBar';
import EditorHeader from './components/EditorHeader';

const Home = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>('file');
  return (
    <H.Home>
      <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <FileExplorer />
      <H.Main>
        <EditorHeader />
      </H.Main>
    </H.Home>
  );
};

export default Home;
