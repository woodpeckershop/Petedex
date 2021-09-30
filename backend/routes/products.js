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
        res.json(products);
        // res.json(
        //   products.reduce(
        //     (previous, current) => ({ ...previous, [current.id]: current }),
        //     {}
        //   )
        // );
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/user_id/:product_id/delete", (req, res) => {
    queries
      .deleteProduct(req.params)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/:user_id/add", (req, res) => {
    //add products needs newproduct: {user_id, id, name, description, price, image_path}
    queries
      .addProduct(req.body.newProduct, db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.patch("/:user_id/:product_id/edit", (req, res) => {
    queries
      .updateProduct(req.body.updateProduct, db)
      .then((data) => {
        res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //get a product
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

  router.get("/:user_id", (req, res) => {
    console.log("getidididididididi", req.params);
    queries
      .getProductWithUserId(req.params.user_id, db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.delete("/delete", (req, res) => {
    queries
      .deleteProduct(req.body.product_id, db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  //search jobs
  router.post("/search", (req, res) => {
    queries
      .getSearchProducts(req.body.productName, db)
      // let { term } = req.query;
      // term = term.toLowerCase();
      .then((data) => {
        res.json(data);
      });
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });
    // Job.findAll({ where: { technologies: { [Op.like]: "%" + term + "%" } } })
    //   .then((jobs) => res.render("jobs", { jobs }))
    //   .catch((err) => console.log(err));
  });

  router.delete("/:product_id/delete", (req, res) => {
    queries
      .deleteProduct(req.body.updateProduct, db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
