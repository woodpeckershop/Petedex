const express = require("express");
const router = express.Router();
const queries = require("../db/queries/queries");

module.exports = function (db) {
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    queries
      .getMessageWithId(id, db)

      .then((messages) => {
        res.json(messages);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/", (req, res) => {
    console.log(req.body, "here in post message id");
    const { sender_id, recipient_id, content } = req.body;
    queries
      .addMessage({ sender_id, recipient_id, content }, db)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
