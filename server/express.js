// const http=require("http")
const express=require("express")

const app = express()
app.get("/",(req,res)=>
{
    res.end("hello from home page")
})

app.get("/about",(req,res)=>
{
    res.end("hello from about page hey "+req.query.name)
})

app.listen(8000,()=>console.log("server started"))
// const newserver=http.createServer(app)
// newserver.listen(8000,()=>console.log("server started"))