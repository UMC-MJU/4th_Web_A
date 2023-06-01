import styled from 'styled-components';

// 공용 styled-component

// display-flex: center?
export const FlexDiv = styled.div<{ direction?: 'row' | 'column'; justify?: boolean; align?: boolean; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  justify-content: ${(props) => (props.justify ? 'center' : 'unset')};
  align-items: ${(props) => (props.align ? 'center' : 'unset')};
  gap: ${(props) => props.gap ?? 0};
`;

// display-flex: space-between
export const FlexBetweenDiv = styled.div<{ align?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.align ? 'center' : 'unset')};
`;

// display-flex: center
export const FlexCenterDiv = styled.div<{ gap?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap ?? 0};
`;

// 화면 가운데 고정
export const CenterFixedDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 이미지 Wrapper
export const ImgWrapper = styled(FlexCenterDiv)<{
  width?: string;
  height?: string;
  round?: boolean;
  pointer?: boolean;
}>`
  width: ${(props) => props.width ?? 'unset'};
  height: ${(props) => props.height ?? 'unset'};
  border-radius: ${(props) => (props.round ? '50%' : 'unset')};
  overflow: hidden;
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  img {
    width: 100%;
    height: 100%;
  }
`;

// Svg Wrapper
export const SvgWrapper = styled(FlexCenterDiv)<{ width?: string; height?: string; fill?: string; stroke?: string }>`
  svg {
    width: ${(props) => props.width ?? ''};
    height: ${(props) => props.height ?? ''};
    fill: ${(props) => props.fill ?? ''};
    path {
      stroke: ${(props) => props.stroke ?? ''};
    }
  }
`;
export const MarginDiv = styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
}>`
  margin-top: ${(props) => props.marginTop ?? 0};
  margin-bottom: ${(props) => props.marginBottom ?? 0};
  margin-right: ${(props) => props.marginRight ?? 0};
  margin-left: ${(props) => props.marginLeft ?? 0};
`;
