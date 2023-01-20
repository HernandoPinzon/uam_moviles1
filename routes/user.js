const EXPRESS = require("express");
const USER_SCHEMA = require("../models/users");
const router = EXPRESS.Router();

router.post("/user", (req, res) => {
  const newUser = req.body(USER_SCHEMA);
  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.get("/", (req, res) => {
    USER_SCHEMA.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});
router.get("/:user_id", (req, res) => {
    USER_SCHEMA.findById(req.params.user_id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});
router.put("/:user_id", (req, res) => {});
router.delete("/:user_id", (req, res) => {});
