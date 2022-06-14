import styled from "@emotion/styled";

export const LoginWrapper = styled(`div`)`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MenuContainer = styled(`div`)`
  width: 250px;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #D4D0C9;
  border: 1px solid #D4D0C9;
  box-shadow: inset 1px 1px white, inset -1px -1px #808080;
`;

export const MenuTop = styled(`div`)`
  color: #FEFEFE;
  background: #75B3D3;
  font-size: 14px;
  font-weight: normal;
  cursor: default;
  background: linear-gradient(to right, #08008E, #75B3D3);
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 4px;
`

export const MenuButton = styled(`button`)`
  align-self: end;
`

export const LoginImage = styled(`img`)`
  object-fit: contain;
  padding: 10px;
`;

export const LoginButton = styled(`button`)`
  width: 80px;
  margin: auto;
  text-transform: inherit !important;
  background-color: var(--bg-login-button) !important;
  color: var(--text-login-button);
`;
