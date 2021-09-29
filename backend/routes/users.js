/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// const express = require('express');
// const router  = express.Router();

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };
// const express = require("express");
// const router = express.Router();
const queries = require("../db/queries/queries");

const express = require("express");
const router = express.Router();

module.exports = function (db) {
  router.put("/signup", (req, res) => {
    console.log("11111111", req.body);
    res.json("success");
    queries
      .createNewUser(req.body)
      .then((user) => {
        res.send({ message: "Welcome to the Shop" });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/login", (req, res) => {
    console.log("00000000", req.body);

    queries
      .getPassWordWithEmail(req.body, db)
      .then((user) => {
        if (user.length === 0) {
          res.send({ error: "Wrong password or Wrong email!" });
          return;
        } else {
          res.send(user);
        }
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return router;
};
