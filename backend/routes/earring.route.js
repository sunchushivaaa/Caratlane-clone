const express = require("express");
const jwt = require("jsonwebtoken");
const EarringModel = require("../models/earring.model");
const earringRouter = express.Router();

earringRouter.get("/", async (req, res) => {
  let token = req.headers.authorization;
  let querry = req.body;
  if (querry.device) {
    try {
      const decode = jwt.verify(token, process.env.key);
      if (decode) {
        const userId = decode.userId;
        const data = await EarringModel.find({ userId: userId });
        let filteredData = data.filter((e) => {
          return e.device === querry.device;
        });
        res.send({ Data: filteredData });
      } else {
        res.send({ Data: [] });
      }
    } catch (e) {
      res.send(e);
    }
  } else {
    try {
      const data = await EarringModel.find();
      res.send({ Data: data });
    } catch (e) {
      res.send(e);
    }
  }
});

earringRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newPost = new EarringModel(payload);
    await newPost.save();
    res.send({ msg: "Post Saved", New_Post: newPost });
  } catch (e) {
    res.send({ msg: e.message });
  }
});

earringRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    await EarringModel.findByIdAndUpdate(id, { ...payload });
    let UpdatePost = await EarringModel.findById(id);
    res.send({ msg: "Post Updated", Updated_Post: UpdatePost });
  } catch (e) {
    res.send({ msg: e.message });
  }
});

earringRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await EarringModel.findByIdAndDelete(id);
    res.send({ msg: "Post Deleted" });
  } catch (e) {
    res.send({ msg: e.message });
  }
});
module.exports = earringRouter;
