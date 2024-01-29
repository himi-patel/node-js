const http=require("http")
const fs=require("fs")
const url=require("url")



const server=http.createServer((req,res)=>{
    // console.log("new req rec.")
    if(req.url==="/favicon.ico") return res.end()
    const newurl=url.parse(req.url,true)
    console.log(newurl)
    const log=`${Date.now()} : ${req.url} new request recieved\n`
    fs.appendFile("log.txt",log,(err,data)=>
    {
        // res.end("hello from server")
        // console.log("req recieved")
        switch(newurl.pathname)
        {
            case "/": 
            if (req.method==="get")  res.end("home page")
            break

            
            case "/about": 
            const qp=newurl.query.name
            res.end(`hiii welcome ${qp}`)
            break
            
            case "/search":
            const search=newurl.query.search_query
            res.end(`here are you results from ${search}`)
            break

            case "/signup":
              if(req.method==="get")
              res.end("sign up")
             else if(req.method==="post")
              res.end("success")
              break

            default:
                res.end( "404:not found")
                break
               


        }

    })
    // console.log(req.headers)
})

server.listen(8000,()=>console.log("server started"))