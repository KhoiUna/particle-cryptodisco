const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const postParticle = require("../utils/postParticle");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/lightRing", (req, res, next) => {
  postParticle(req.body.arg);
  res.sendStatus(200);
  next();
});

module.exports = router;
