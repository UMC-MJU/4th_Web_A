import styled, { css, keyframes } from 'styled-components';

export const EditorBody = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: ${theme.blue_900};
    /* color: #f700ff; */
    font-size: 16px;
    white-space: pre;
    line-height: 1.5;
    font-weight: 600;
    overflow-y: scroll;
    animation: ${colorChange} 10s infinite;
  `}
`;

const colorChange = keyframes`
  0%{
    color:#A0D468;
  }
  
  20%{
    color:#4FC1E9;
  }
  
  40%{
    color:#FFCE54;
  }
  
  60%{
    color:#FC6E51;
  }
  
  80%{
    color:#ED5565;
  }
  
  100%{
    color:#AC92EC;
  }
`;
// const colorChange = keyframes`
//   0% { color: red; }
//   10% { color: orange; }
//   20% { color: yellow; }
//   30% { color: lime; }
//   40% { color: blue; }
//   50% { color: indigo; }
//   60% { color: violet; }
//   70% { color: purple; }
//   80% { color: pink; }
//   90% { color: brown; }
//   100% { color: red; }
// `;
