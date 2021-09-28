const express = require('express');
const router  = express.Router();
const queries = require("../db/queries/queries");

module.exports = function(db) {
router.get("/:user_id", (req, res) => {
  console.log('user_id', req.params.user_id)
      queries
        .getFavoritesByUserId(req.params.user_id, db)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    });

  router.delete("/:user_id/:product_id", (req, res) => {
    console.log("req", req)  
    // const info = {user_id :req.params.user_id, product_id: req.params.product_id}  
    queries
          .deleteFavorite(req.body.oldFav,db)
          .then((data) => {
            console.log("data", data);
            res.status(200).json(data);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      })

    router.put("/:user_id/:product_id", (req, res) => {
      // console.log("newFav",res);
          queries
            .addFavorite(req.body.newFav, db)
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((err) => {
              res.status(500).json({ error: err.message });
            });
        })
        return router;

}
