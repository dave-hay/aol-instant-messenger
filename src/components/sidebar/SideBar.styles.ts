import styled from "@emotion/styled";

export const SidebarWrapper = styled('div')`
  flex: 0.35;
  background-color: #D4D0C9;
  border-top: 1px solid #D4D0C9;
  border-left: 1px solid #D4D0C9;
  border-right: 1px solid #404040;
  border-bottom: 1px solid #404040;
  box-shadow: inset 1px 1px white, inset 1px -1px #808080;
  display: flex;
  flex-flow: column;
`

export const SidebarContents = styled('div')`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-flow: column;
`

export const UserInfo = styled('div')`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: baseline;
`

export const LogoContainer = styled('div')`
  padding: 5px;
  display: flex;
  flex-flow: row;
  align-items: center;
  color: #FEFEFE;
  background-color: #095FA8;
`

export const Logo = styled('img')`
  margin: 5px;
  margin-left: 30px;
  width: 100px;
  height: auto;
  background: transparent;
`

export const RoomBox = styled('div')`
  flex: 1;
  background-color: white;
  border-top: 1px solid #808080;
  border-left: 1px solid #808080;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: inset 1px 1px black, inset -1px -1px #d4d0c9;
  padding: 5px 8px;
  padding-right: 10px;
  overflow: scroll;
`
export const RoomContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #808080;
`

export const RoomH1 = styled('h1')`
  padding: 5px;
  cursor: pointer;
`

export const CreateRoomWrapper = styled('span')`
  margin-right: 4px;
`

export const CreateRoom = styled('a')`
  margin-left: 10px;
  text-decoration: none;
  cursor: pointer;
  color: blue;
`
export const RoomsUl = styled('ul')`
  padding: 0;
  //margin-left: 2px;
  margin-bottom: 10px;
`


export const RoomLi = styled('li')`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`


// export const RoomName = styled('h1')`
//   margin-right: 4px;
// `


// export const RoomDelete = styled('a')`
//   text-decoration: none;
// `