const express = require("express");
const jwt = require("jsonwebtoken");
const MangalsutraModel = require("../models/mangalsutra.model");
const mangalsutraRouter = express.Router();

mangalsutraRouter.get("/", async (req, res) => {
  let token = req.headers.authorization;
  let querry = req.body;
  if (querry.device) {
    try {
      const decode = jwt.verify(token, process.env.key);
      if (decode) {
        const userId = decode.userId;
        const data = await MangalsutraModel.find({ userId: userId });
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
      const data = await MangalsutraModel.find();
      res.send({ Data: data });
    } catch (e) {
      res.send(e);
    }
  }
});

mangalsutraRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newPost = new MangalsutraModel(payload);
    await newPost.save();
    res.send({ msg: "Post Saved", New_Post: newPost });
  } catch (e) {
    res.send({ msg: e.message });
  }
});

mangalsutraRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    await MangalsutraModel.findByIdAndUpdate(id, { ...payload });
    let UpdatePost = await MangalsutraModel.findById(id);
    res.send({ msg: "Post Updated", Updated_Post: UpdatePost });
  } catch (e) {
    res.send({ msg: e.message });
  }
});

mangalsutraRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await MangalsutraModel.findByIdAndDelete(id);
    res.send({ msg: "Post Deleted" });
  } catch (e) {
    res.send({ msg: e.message });
  }
});
module.exports = mangalsutraRouter;
