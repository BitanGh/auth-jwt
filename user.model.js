const express = require ("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json());
mongoose.connect("mongodb+srv://bitanghosh:bitan12345@cluster0.v901xgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const User = mongoose.model("user",{
  name : String,
  email : String,
  password : String
})
app.post('/signup', async (req,res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

const existedUser = User.findOne({
  email : email
})
  if(existedUser){
    req.statusCode(403).json("User already exists");
  }
 const user = new User({
   name: name,
   email : email,
   password : password
 })

  user.save();
  res.json(
    {
      "msg" : "User succesfully created"
    }
  )
   
 
})