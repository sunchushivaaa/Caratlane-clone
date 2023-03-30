const express = require("express")
const jwt = require("jsonwebtoken");
const BraceletsModel = require("../models/bracelet.model");

const braceletRouter = express.Router()

braceletRouter.get("/", async (req, res) => {
    let token = req.headers.authorization;
    let querry = req.body;
    if (querry.device) {
        try {
            const decode = jwt.verify(token, process.env.key)
            if (decode) {
                const userId = decode.userId;
                const data = await BraceletsModel.find({ userId: userId })
                let filteredData = data.filter((e) => {
                    return e.device === querry.device
                });
                res.send({ Data: filteredData });
            } else {
                res.send({ Data: [] })
            }
        } catch (e) {
            res.send(e)
        }
    } else {
        try {
            const data = await BraceletsModel.find()
            res.send({ Data: data });
        } catch (e) {
            res.send(e)
        }
    }
})

braceletRouter.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const newPost = new BraceletsModel(payload);
        await newPost.save()
        res.send({ msg: "Post Saved", New_Post: newPost })
    } catch (e) {
        res.send({ "msg": e.message })
    }
})

braceletRouter.patch("/update/:id", async(req,res)=>{
    const payload=req.body
    const id=req.params.id;
    try{
        await BraceletsModel.findByIdAndUpdate(id,{...payload});
        let UpdatePost = await BraceletsModel.findById(id)
        res.send({msg:"Post Updated", Updated_Post:UpdatePost})
    }catch(e){
        res.send({"msg":e.message})
    }
})

braceletRouter.delete("/delete/:id", async(req,res)=>{
    const id=req.params.id;
    try{
        await BraceletsModel.findByIdAndDelete(id);
        res.send({msg:"Post Deleted"})
    }catch(e){
        res.send({"msg":e.message})
    }
})

module.exports = braceletRouter