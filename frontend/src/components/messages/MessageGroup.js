import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../providers/AuthProvider";
import "./MessageGroup.scss";
import Message from "./Message";

function MessageGroup() {
  const { user_id } = useContext(authContext);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const allClientIdList = messages.map((message) => {
    if (message && message.recipient_id !== user_id)
      return message.recipient_id;
    if (message && message.sender_id !== user_id) return message.sender_id;
  });

  const uniqueIdList = [...new Set(allClientIdList)];

  useEffect(() => {
    Axios.get(`http://localhost:8080/api/messages/${user_id}`).then((res) => {
      setMessages([...res.data]);
    });

    Axios.get("http://localhost:8080/api/users/all").then((res) => {
      setUsers([...res.data]);
    });
  }, []);

  const messageGroup = uniqueIdList.map((id) => {
    let clientName;
    if (users.length !== 0) {
      clientName = users.filter((user) => Number(id) === user.id)[0].name;
    }

    return (
      <div className="chatContainer">
        <div className="chat_top_bar">
          <h3 className="chat_title">Message with: {clientName}</h3>
        </div>

        <Message
          clientName={clientName}
          messages={messages}
          users={users}
          id={id}
          user_id={user_id}
          setMessages={setMessages}
        />
      </div>
    );
  });

  return (
    <div className='message-page'>
      <table>{messageGroup}</table>
    </div>
  );
}

export default MessageGroup;
