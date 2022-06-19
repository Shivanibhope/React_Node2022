//token file
const dotenv = require('dotenv');
dotenv.config();



//server connection 
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ListUsers").then(
    () => console.log("Connection succefully")
).catch(
    (error) => console.log(error)
);

//middel ware
const cors = require('cors')

//table Model        
const listmodel = require('./models/details');

const auth = require('./Auth')
//JWT class
const jwt = require('jsonwebtoken');

const express = require("express");


tabledata = express();
tabledata.use(express.json());
tabledata.use(cors())

// User Registration  Api
tabledata.post("/signUp", async (req, res) => {
    const userdata = await listmodel.find()
    if (req.body.password === req.body.confirm_password) {
        const tdata = {

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            password: req.body.password,
            confirm_password: req.body.confirm_password
        }
        const tableobj = new listmodel(tdata)
        const result = await tableobj.save()
        res.send({ status: true })
    } else {
        res.send({ status: false, msg: "Invalid Password" });

    }

});

//User Login  Api
tabledata.post("/login", async (req, res) => {
    console.log(req.body)

    const em = req.body.email
    const userdata = await listmodel.findOne({email: em })
    console.log(em)
    console.log(userdata)
    const id = userdata._id 
   
    if (req.body.password === userdata.password) {
        // console.log(id)
        var token = await jwt.sign({ _id: id }, process.env.TOKEN_SECRET, { expiresIn: '20s' })
        console.log(token)
        res.json({ status: true, token: token });
        // response.send("login succ")
    } else {
        res.json({ status: false, msg: "Invalid Id or Password" });
        // response.send(error)
    }
});

//get API 
tabledata.get("/allusers", auth, async (req, res) => {
    try {
        const usedata = await listmodel.find({}, { password: 0, confirm_password: 0 })
        res.send({ status: true, data: usedata })
        // res.send(usedata)

    } catch (error) {
        res.send({ status: false })
    }
});
tabledata.listen(8000, () => console.log("server running  port 8000"));
