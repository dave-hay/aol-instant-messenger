import { useState, useEffect }                                                                                         from "react";
import "./Chat.css";
import { useLocation }                                                                                                 from "react-router-dom";
import { useSelector }                                                                                                 from "react-redux";
import db                                                                                                              from "../../firebase";
import {
  doc,
  onSnapshot,
  query,
  orderBy,
  collection,
  serverTimestamp,
  addDoc,
}                                                                                                                      from "firebase/firestore";
import { ChatWindow, HeaderBar, Divider, ChatWindowContent, ChatMessages, TextArea, Footer, WindowButton, FooterForm } from "./Chat.styles";

const Chat = () => {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  let location = useLocation();
  let roomId = location.pathname.substring(7);

  const user = useSelector((state: any) => state.user.value);

  useEffect(() => {
    async function handleRoomName(database: any, id: any) {
      const room = doc(database, "rooms", id);
      await onSnapshot(room, (doc) => {
        setRoomName(doc.data()?.name);
      });
    }

    if (roomId) {
      handleRoomName(db, roomId).catch(console.error);

      // https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection
      // updates the chat
      const roomRef = doc(db, "rooms", roomId);
      const messageRef = collection(roomRef, "messages");
      const q = query(messageRef, orderBy("timestamp", "asc"));
      onSnapshot(q, (querySnapshot) => {
        setMessages(querySnapshot.docs.map(doc => doc.data()));
      });
    }
  }, [roomId]);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const roomRef = doc(db, "rooms", roomId);
    const messageRef = collection(roomRef, "messages");
    await addDoc(messageRef, {
      message  : input,
      name     : user.displayName,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <ChatWindow>
      <HeaderBar>{roomName}</HeaderBar>
      <Divider />
      <ChatWindowContent>
        <ChatMessages>
          {messages.map((message: any) => (
            <p
              className={`chat_message ${message.name === user.displayName && "chat_receiver"}`}>
              <span className='chat_name'>{message.name}</span>
              {message.message}
              <span
                className='chat_timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
            </p>
          ))}
        </ChatMessages>
      </ChatWindowContent>
      <Divider />

      <TextArea
        rows={2}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type a message'
      />
      <Footer>
        <WindowButton type={"submit"} onClick={sendMessage}>
          Send
        </WindowButton>
      </Footer>
    </ChatWindow>
  );
};

export default Chat;