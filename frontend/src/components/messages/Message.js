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
          <tr>
            <td>From: {fromName}</td>
            <td>To: {toName}</td>
            <td>Content: {message.content}</td>
          </tr>
        );
      }
    });
  return (
    <div>
      <table> {messageList}</table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleReply}>Reply</button>
      </form>
    </div>
  );
}

export default Message;
