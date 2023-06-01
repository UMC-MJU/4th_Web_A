import React from 'react';
import * as S from './SideBar.styled';
import menuIcon1_active from '../../../assets/icons/sidebar/menu_icon1_active.png';
import menuIcon2 from '../../../assets/icons/sidebar/menu-icon2.png';
import menuIcon3 from '../../../assets/icons/sidebar/menu-icon3.png';
import menuIcon4 from '../../../assets/icons/sidebar/menu-icon4.png';
import menuIcon5 from '../../../assets/icons/sidebar/menu-icon5.png';
import menuIcon6 from '../../../assets/icons/sidebar/menu-icon6.png';
import { MenuType } from '../../../types/types';

interface Props {
  activeMenu: MenuType;
  setActiveMenu: React.Dispatch<React.SetStateAction<MenuType>>;
}
interface IMenu {
  type: MenuType;
  src: string;
  alt: string;
}
const topMenuIcons: IMenu[] = [
  { type: 'file', src: menuIcon1_active, alt: '파일 아이콘' },
  { type: 'search', src: menuIcon2, alt: '더보기 아이콘' },
  { type: 'git', src: menuIcon3, alt: 'Git 아이콘' },
  { type: 'debug', src: menuIcon4, alt: '디버그 아이콘' },
];
const bottomMenuIcons = [
  { type: 'profile', src: menuIcon5, alt: '프로필 아이콘' },
  { type: 'config', src: menuIcon6, alt: '설정 아이콘' },
];
const SideBar: React.FC<Props> = ({ activeMenu, setActiveMenu }) => {
  return (
    <S.SideBar>
      <S.Menus>
        {topMenuIcons.map((icon, i) => (
          <S.MenuItem key={i} isActive={icon.type === activeMenu}>
            <img src={icon.src} alt={icon.alt} />
          </S.MenuItem>
        ))}
      </S.Menus>
      <S.Menus>
        {bottomMenuIcons.map((icon, i) => (
          <S.MenuItem key={i} isActive={icon.type === activeMenu}>
            <img src={icon.src} alt={icon.alt} />
          </S.MenuItem>
        ))}
      </S.Menus>
    </S.SideBar>
  );
};

export default SideBar;
