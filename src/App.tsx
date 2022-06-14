import React             from "react";
import Home              from "./components/Home";
import Login             from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import RequireAuth       from "./components/RequireAuth";
import styled            from "@emotion/styled";
import Background        from "./images/background.png";

function App() {
  const AppWrapper = styled("div")`
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
  `;

  return (
    <AppWrapper style={{ backgroundImage: `url(${Background})` }}>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"rooms"} element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path={"rooms/:roomsId"} element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
      </Routes>
    </AppWrapper>
  );
}

export default App;
