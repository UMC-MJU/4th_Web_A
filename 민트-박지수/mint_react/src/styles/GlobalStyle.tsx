import { createGlobalStyle } from 'styled-components';

export const supportDeviceSize = 735;
export const navZindex = 100;
export const backdropZindex = 1001;
export const modalZindex = 1002;

export const GlobalStyle = createGlobalStyle`

/////////////////////// reset css/////////////////////////////// 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5,h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/////////////////////////// global syle ////////////////////////////////
html {
  font-size: 62.5%; 
}

body {
  position: relative;
  font-family: -apple-system, sans-serif, Roboto;
	background-color: ${(props) => props.theme.blue_900};
	color: ${(props) => props.theme.white};
}

.modal-open {
  overflow: hidden;
}

a{
  text-decoration: none;
  color: inherit;
}
button,p,input{
  all: unset;
}
button{
  cursor: pointer;
}
*{
  box-sizing: border-box;
}
:root{
  --top:9;
}

`;
