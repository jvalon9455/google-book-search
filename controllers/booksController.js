const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
  //   res.json(req);
  db.Books.find({}).then((found) => {
    res.json(found);
  });
});

router.post("/api/books", (req, res) => {
  const newBook = {
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  };
  db.Books.create(newBook).then((newby) => {
    res.json(newby);
  });
});

module.exports = router;