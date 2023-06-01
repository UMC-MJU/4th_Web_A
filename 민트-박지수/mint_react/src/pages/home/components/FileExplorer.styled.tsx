import styled, { css } from 'styled-components';

export const FileExplorer = styled.section`
  ${({ theme }) => css`
    flex-shrink: 0;
    flex-basis: 300px;
    position: relative;
    /* width: 300px; */
    height: 100%;
    background-color: ${theme.blue_900};
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
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

export const FolderHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
// export const FolderItem = styled.div`
//   display: flex;
// `;
