const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");
const {connectdb}=require("./connection")
const {logreqres}=require("./middlewares")
const userrouter=require("./routes/user");
const router = require("./routes/user");
// const users = require("./MOCK_DATA.json");


connectdb("mongodb://127.0.0.1:27017/test")


// app.get("/users", async(req, res) => {
//     const allUser=await User.find({})
//   let html = `<ul>
//     ${allUser.map((user) => `<li>${user.firstName} ${user.Email}</li>`).join("")}
//     </ul>`;
//   res.send(html);
// });
//middleware/ plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //     req.username="himi"
  // console.log("hey1",req.username)//hold the response
  // return res.end("hii") return the response but not execute next function


});


// app.use((req, res, next) => {
//   console.log("hey2", req.username); //hold the response
//   // return res.end("hii")
//   //  return the response but not execute next function
//   next();
// });


app.use("/user",router)
app.listen(port, () => console.log("server started"));
