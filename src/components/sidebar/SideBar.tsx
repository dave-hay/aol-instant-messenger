import SideBarChat                                                                            from "./SideBarChat";
import { useEffect, useState }                                                                from "react";
import { useSelector }                                                                        from "react-redux";
import { collection, query, onSnapshot }                                                      from "firebase/firestore";
import db                                                                                     from "../../firebase";
import { SidebarWrapper, SidebarContents, UserInfo, LogoContainer, RoomBox, RoomsUl, RoomLi, Logo } from "./SideBar.styles";
import { HeaderBar, Divider }                                                                 from "../global.styles";
import LogoImg                                                                                from "../../images/icon.png";


const SideBar = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const user = useSelector((state: any) => state.user.value);

  useEffect(() => {
    const roomRefQuery = query(collection(db, "rooms"));
    onSnapshot(roomRefQuery, (querySnapshot) => {
      setRooms(querySnapshot.docs.map((doc) => (
        { id: doc.id, data: doc.data() }
      )));
    });
  }, []);

  return (
    <SidebarWrapper>
      <HeaderBar>Chat Rooms</HeaderBar>
      <Divider />
      <SidebarContents>
        <UserInfo>
          <p>Hello {user.displayName}</p>
        </UserInfo>
        <Divider />
        <LogoContainer>
          <Logo src={LogoImg} alt={"logo icon"}/>
          <h2>AOL Instant Messenger</h2>
        </LogoContainer>
        <Divider />
        <RoomBox>
          <SideBarChat addNewChat />
          <RoomsUl>
            {rooms.map(room => (
              <SideBarChat key={room.id} id={room.id} name={room.data.name} />
            ))}
          </RoomsUl>
        </RoomBox>
      </SidebarContents>
    </SidebarWrapper>
  );
};

export default SideBar;