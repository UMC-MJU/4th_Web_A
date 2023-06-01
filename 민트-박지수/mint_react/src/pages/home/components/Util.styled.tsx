import styled, { css } from 'styled-components';

export const ChevronDownWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 11px;
    }
    path {
      stroke: ${theme.gray_100};
    }
  `}
`;

export const ChevronRightWrapper = styled(ChevronDownWrapper)`
  svg {
    height: 11px;
  }
`;

export const Children = styled.div<{ hidden?: boolean }>`
  ${({ hidden }) => css`
    display: ${hidden ? 'none' : 'block'};
  `}
`;
