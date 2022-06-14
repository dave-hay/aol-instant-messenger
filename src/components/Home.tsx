import SideBar from "./sidebar/SideBar";
import Chat    from "./chat/Chat";
import styled  from "@emotion/styled";

const Home = () => {
  const AppBody = styled("div")`
    display: flex;
    background-color: var(--bg-body);
    height: 90vh;
    width: 90vw;
    margin-top: -50px;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.2);
  `;

  return (
    <AppBody>
      <SideBar />
      <Chat />
    </AppBody>
  );
};

export default Home;