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

const express = require('express');
const router  = express.Router();

module.exports = function (db) {
router.put("/signup/:id", (req, res) => {
  res.json("success");
  // whyreq.body.c?
  queries.createNewUser(req.body)
  .catch((err) => {
    console.log(err);
  });
});
}
