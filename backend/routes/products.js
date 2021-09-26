const express = require("express");
const router = express.Router();
const queries = require("../db/queries/queries");

module.exports = function (db) {
  router.get("/", (req, res) => {
    queries
      .getAllProducts(db)
      // .then((data) => {
      //   res.json(data);

      // })
      .then((products) => {
        res.json(
          products.reduce(
            (previous, current) => ({ ...previous, [current.id]: current }),
            {}
          )
        );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   router.put("/user_id/:product_id/delete", (req, res) => {
  //     queries
  //       .deleteProduct(req.params)
  //       .then((data) => {
  //         console.log("data", data);
  //         res.status(200).json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   })

  //   router.put("/user_id/:product_id/add", (req, res) => {
  //     queries
  //       .addProduct(req.body?)
  //       .then((data) => {
  //         res.json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   })

  //   router.patch("/user_id/:product_id/edit", (req, res) => {
  //     queries
  //       .updateProduct
  //       .then((data) => {
  //         res.json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   })

  router.get("/:product_id", (req, res) => {
    queries
      .getProductWithId(req.params.product_id, db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
