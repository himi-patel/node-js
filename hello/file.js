let fs=require("fs")
console.log(fs)

// fs.writeFileSync("./test.txt","hey there")

// fs.writeFile("./test.txt","helloo",(err)=>{})

// const result=fs.readFileSync("./test.txt","utf-8")
// console.log(result)

// fs.readFile("./test.txt","utf-8",(err,result)=>
// {
//     if(err)
//     {
//         console.log("error",err)
//     }
//     else
//     {
//         console.log(result)
//     }

// })

// fs.appendFileSync("./test.txt","hiiii there\n")
// fs.appendFileSync("./test.txt",`hiiii there ${new Date().toLocaleTimeString()}\n`)

// fs.cpSync("./test.txt","copy.txt")

// fs.unlinkSync("./copy.txt")
// console.log(fs.statSync("./test.txt"))
// console.log(fs.statSync("./test.txt").isFile())

// fs.mkdirSync("mydocs/a/s",{recursive:true})
