const express = require("express");
// const { check } = require("../middleware/check");
const CartModel = require("../models/cart.model");
// const  CartModel = require("../model/cart.model");
const jwt = require("jsonwebtoken")

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    const userId = req.body.userId;
    const token=req.headers.authorization
    const decoded= jwt.verify(token, "raj")
    try {
      const data = await CartModel.find({ userId: decoded.userId});
      res.send(data);
    } catch (error) {
      res.send(error);
    }
});

cartRouter.post("/add", async (req, res) => {
  console.log(req.body)
    try {
        const data = new CartModel(req.body);
        await data.save();
        res.send("data is added");
      } catch (error) {
        res.send(error);
      }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const productId = req.params.id;
//   console.log("productid", productId);

  try {
    let cart = await CartModel.findOneAndDelete({ productId });
    // console.log("cartid", cart);
    return res.status(200).send("deleted");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = cartRouter
