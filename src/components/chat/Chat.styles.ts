import styled     from "@emotion/styled";

export const ChatWindow = styled('div')`
  flex: 0.65;
  display: flex;
  flex-flow: column;
  background-color: #D4D0C9;
  border: 1px solid #D4D0C9;
  box-shadow: inset 1px 1px white, inset -1px -1px #808080;
`

export const HeaderBar = styled('header')`
  padding: 10px;
  color: #FEFEFE;
  background: #75B3D3;
  background: linear-gradient(to right, #08008E, #75B3D3);
  font-size: 14px;
  font-weight: normal;
  cursor: default;
`

export const Divider = styled('hr')`
  margin: 2.5px 0;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #FFFFFF;
`

export const ChatWindowContent = styled('div')`
  flex: 1;
  display: flex;
  flex-flow: column;
  padding: 5px 10px;
  box-sizing: border-box;
`

export const ChatMessages = styled('ul')`
  padding: 5px 8px;
  height: 530px;
  background-color: white;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: inset 1px 1px black, inset -1px -1px #d4d0c9;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: 15px;
  user-select: text;
`

export const Message = styled('span')`
  font-weight: 100;
`

export const TextArea = styled('textarea')`
  padding: 5px 8px;
  background-color: white;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: inset 1px 1px black, inset -1px -1px #d4d0c9;
  resize: none;
`

export const Footer = styled('footer')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const FooterForm = styled('footer')`
  flex: 1;
  display: flex;
`

export const WindowButton = styled('button')`
  background-color: #D4D0C9;
  border-top: 1px solid #D4D0C9;
  border-left: 1px solid #D4D0C9;
  border-right: 1px solid #404040;
  border-bottom: 1px solid #404040;
  box-shadow: inset 1px 1px white, inset -1px -1px #808080;
  padding: 5px;


`