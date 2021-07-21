import express from "express";
const router = express.Router();
import Schema from "./model.js";

router.post("/send/messages", (req, res) => {
  const dbData = req.body;

  Schema.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
router.get("/get/messages", (req, res) => {
  Schema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      data.sort((b, a) => {
        return a.timestamp - b.timestamp;
      });
      res.status(200).send(data);
    }
  });
});

export default router;
