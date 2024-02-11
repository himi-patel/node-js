const fs=require("fs")

function logReqres(file)
{
return (req,res,next)=>
{
    fs.appendFile(
        file,
        `\n${Date.now()} :${req.method} :${req.path}\n`,
        (err, data) => {
          res.setHeader("name", "himi");
          next();
        }
      );
}
}
module.exports={
    logReqres,
}