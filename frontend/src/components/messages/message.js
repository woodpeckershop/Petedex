import Axios from 'axios';
import React, { useState } from 'react';

function Message({ messages, id, user_id, setMessages }) {
  const [input, setInput] = useState('');
  const handleReply = () => {
    const templateVar = {
      recipient_id: id,
      sender_id: user_id,
      content: input,
    };
    Axios.put('http://localhost:8080/api/messages', templateVar)
      .then((data) => {
        setMessages([...messages, data.data[0]]);
      })
      .catch((err) => console.log(err));
    setInput('');
    return;
  };
  const messageList = messages
    .filter(
      (message) => message?.recipient_id === id || message?.sender_id === id
    )
    .map((message) => {
      if (message)
        return (
          <tr>
            <td>From: {message.sender_id}</td>
            <td>To: {message.recipient_id}</td>
            <td>Content: {message.content}</td>
          </tr>
        );
    });
  return (
    <div>
      <table> {messageList}</table>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
}

export default Message;
