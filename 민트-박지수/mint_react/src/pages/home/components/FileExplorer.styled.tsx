import styled, { css } from 'styled-components';

export const FILE_EXPLORER_WIDTH = '300px';
const HEADER_HEIGHT = '50px';
const FOLDER_HEADER_HEIGHT = '30px';

export const FileExplorer = styled.section`
  ${({ theme }) => css`
    flex-shrink: 0;
    flex-basis: ${FILE_EXPLORER_WIDTH};
    position: relative;
    /* width: 300px; */
    height: 100%;
    overflow-x: hidden;
    background-color: ${theme.blue_900};
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: ${HEADER_HEIGHT};
  > span {
    font-size: 14px;
    color: #ffffff;
  }
`;

export const H_Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  > div {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #ffffff;
  }
`;

// export const NonFolderText

export const FolderHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${FOLDER_HEADER_HEIGHT};
    padding: 0 7px;
    background-color: ${theme.blue_800};
    color: ${theme.white};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  `}
`;

export const FolderHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const FolderHeaderBtns = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      padding: 3px;
      :hover {
        background-color: ${theme.blue_300};
      }
    }
    img {
      width: 100%;
    }
  `}
`;

export const Body = styled.div<{ folderOpened: boolean }>`
  ${({ theme, folderOpened }) => css`
    display: flex;
    flex-direction: column;
    gap: ${folderOpened ? 0 : '15px'};
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT} - ${FOLDER_HEADER_HEIGHT});
    padding: ${folderOpened ? '0' : '20px'};
    font-size: 12px;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-bottom: 30px;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.blue_500};
    }
  `}
`;

export const OpenBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 4px;
    background-color: #0078d4;
    font-size: 14px;
    border-radius: 2px;
    :hover {
      background-color: ${theme.blue_vscode};
    }
    > input {
      display: none;
    }
  `}
`;
