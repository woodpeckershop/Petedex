const express = require("express");
const router = express.Router();
const queries = require("../db/queries/queries");

module.exports = function (db) {
  router.get("/", (req, res) => {
    queries
      .getAllServices(db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //   router.put("/user_id/:service_id/delete", (req, res) => {
  //     queries
  //       .deleteService
  //       .then((data) => {
  //         console.log("data", data);
  //         res.status(200).json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   })

  //   router.put("/user_id/:service_id/add", (req, res) => {
  //     queries
  //       .addService
  //       .then((data) => {
  //         res.json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   })

  //   router.patch("/user_id/:service_id/edit", (req, res) => {
  //     queries
  //       .updateService
  //       .then((data) => {
  //         res.json(data);
  //       })
  //       .catch((err) => {
  //         res.status(500).json({ error: err.message });
  //       });
  //   })

  router.get("/:service_id", (req, res) => {
    queries
      .getServiceWithId(req.params.service_id, db)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
