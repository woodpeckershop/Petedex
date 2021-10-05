import Axios from "axios";
import React, { useState } from "react";

function Message({ messages, id, user_id, setMessages, users }) {
  const [input, setInput] = useState("");
  const handleReply = () => {
    const templateVar = {
      recipient_id: id,
      sender_id: user_id,
      content: input,
    };
    Axios.put("http://localhost:8080/api/messages", templateVar)
      .then((data) => {
        setMessages([...messages, data.data[0]]);
      })
      .catch((err) => console.log(err));
    setInput("");
    return;
  };
  const messageList = messages
    .filter(
      (message) => message?.recipient_id === id || message?.sender_id === id
    )
    .map((message) => {
      if (message && users.length !== 0) {
        const fromName = users?.filter(
          (user) => message.sender_id === user.id
        )[0].name;
        const toName = users?.filter(
          (user) => message.recipient_id === user.id
        )[0].name;

        return (
          <div className="message_box">
            <div>
              {fromName} : {message.content}
            </div>
          </div>
        );
      }
    });
  return (
    <div className="chat_main">
      <span> {messageList}</span>
      <div className="bottom_bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="chat_input"
            placeholder="Reply ..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleReply} className="reply_button">
            Reply
          </button>
        </form>
      </div>
    </div>
  );
}

export default Message;
