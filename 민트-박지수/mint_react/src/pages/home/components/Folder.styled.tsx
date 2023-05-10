import styled, { css } from 'styled-components';

export const FolderWrapper = styled.div`
  width: 100%;
`;
export const Folder = styled.div<{ selected: 'none' | 'strong' | 'light' }>`
  ${({ theme, selected }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding-left: 40px;
    border: 1px solid ${theme.blue_900};
    background-color: ${selected === 'none' ? 'inherit' : selected === 'strong' ? '#444759' : theme.blue_600};
    border-color: ${selected === 'none' ? theme.blue_900 : selected === 'strong' ? '#6272a4' : theme.blue_600};
    cursor: pointer;
    :hover {
      background-color: ${selected === 'strong' ? '#444759' : theme.blue_600};
      border-color: ${selected === 'strong' ? '#6272a4' : theme.blue_600};
  `}
`;
export const FolderItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 7px;
    color: ${theme.white};
    font-size: 16px;
    font-weight: 500;
    > span {
      white-space: nowrap;
    }
  `}
`;
export const IndentWrapper = styled.div`
  display: flex;
`;
export const FolderIndent = styled.div`
  width: 10px;
  height: 100%;
`;
