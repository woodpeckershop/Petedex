import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Axios from "axios";
import { useState, useEffect, useContext } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal({user_id,item}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState('');
  const handleReply = () => {
    const templateVar = {
      recipient_id: item.user_id,
      sender_id: user_id,
      content: input,
    };

    Axios.put('http://localhost:8080/api/messages', templateVar)
      .then((data) => {
        console.log("message sent")
      })
      .catch((err) => console.log(err));
    setInput('');
    return;
  };

  return (
    <div>
      <Button onClick={handleOpen}>Message the Seller</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
      />
          <button onClick={handleReply}>Send</button>
        </Box>
      </Modal>
    </div>
  );
}