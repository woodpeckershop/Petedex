const express = require("express");
const router = express.Router();
const queries = require("../db/queries/queries");

module.exports = function (db) {
  router.get("/messages/:id", (req, res) => {
    res.render("messages", {
      user: req.session.user_id,
      ownerid: req.params.id,
    });
  });

  router.post("/messages/:id", (req, res) => {
    const sender_id = req.session.user_id;

    const recipient_id = req.params.id;

    const content = req.body.message;

    database
      .addMessage({ sender_id, recipient_id, content })
      .then((data) => {
        console.log("message", data);
        res.redirect("/books");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
