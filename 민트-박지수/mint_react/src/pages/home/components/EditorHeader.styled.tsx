import styled, { css } from 'styled-components';

export const EditorHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: ${theme.blue_900};
  `}
`;

const ButtonSectionWidth = '130px';
export const FileNameSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: calc(100% - ${ButtonSectionWidth});
  height: 100%;
  overflow-x: scroll;
`;

export const FileItem = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    color: ${selected ? theme.white : 'rgba(255, 255, 255, 0.5)'};
    border-right: 1px solid black;
    background-color: ${selected ? theme.blue_800 : 'inherit'};
    border-top: ${selected ? '0.5px solid rgb(238, 125, 143)' : '0.5px solid #272a36'};
    cursor: pointer;
    :hover {
      > button {
        visibility: unset;
      }
    }
    > span {
      font-size: 16px;
      font-weight: 500;
    }
  `}
`;

export const CloseBtn = styled.button`
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  font-size: 13px;
  border-radius: 5px;
  :hover {
    background-color: #33343b;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ButtonSectionWidth};
  height: 100%;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 5px;
  :hover {
    background-color: #33343b;
  }
`;
