import styled, { css } from 'styled-components';

export const SideBar = styled.menu`
  ${({ theme }) => css`
    width: 60px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 6px 0; */
    background-color: ${theme.blue_500};
  `}
`;

export const Menus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MenuItem = styled.li<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: ${isActive ? '#3D3D4F' : 'inherit'};
    border-left: 3px solid ${isActive ? theme.pink_200 : 'inherit'};
    cursor: pointer;
    > img {
      width: 40px;
    }
  `}
`;
