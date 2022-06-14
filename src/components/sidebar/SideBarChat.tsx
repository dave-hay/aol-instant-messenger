import { useEffect, useState }                                 from "react";
import { addDoc, collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import db                                                      from "../../firebase";
import { Link }                                                from "react-router-dom";
import {RoomLi, RoomContainer, RoomH1, CreateRoomWrapper, CreateRoom}                                                from "./SideBar.styles";

export interface ISideBarChat {
  id?: any;
  name?: any;
  addNewChat?: any;
}

const SideBarChat = ({ id, name, addNewChat }: ISideBarChat) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const roomRef = doc(db, "rooms", id);
      const messageRef = collection(roomRef, "messages");
      const q = query(messageRef, orderBy("timestamp", "desc"));
      onSnapshot(q, (querySnapshot) => {
        setMessages(querySnapshot.docs.map(doc => doc.data()));
      });
    }
  }, [id]);

  const createChat = async () => {
    const roomName = prompt("Please Enter Name for Chat");

    if (roomName) {
      await addDoc(collection(db, "rooms"), {
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} key={id}>
      <RoomLi>
        <span>
          <span style={{fontWeight: 'bold', fontSize: '18px'}}>{name + " "}</span>
          <span style={{color: 'blue'}}>{messages[0]?.name + ": "}</span>
          {messages[0]?.message}
        </span>
      </RoomLi>
    </Link>
  ) : (
  <RoomContainer>
    <RoomH1>Rooms</RoomH1>
    <CreateRoomWrapper>
      <CreateRoom onClick={createChat}>
        Create Room
      </CreateRoom>
    </CreateRoomWrapper>
    </RoomContainer>
  );
};

export default SideBarChat;