const fs=require("fs")


//how node js work?
//===>client sent request to server and in server the request are align in the queue.Then, the event loop take request and if the opration is non-blocking then the process start and return response but in the case of blocking operation thread pool is used .In the thread pool there are 4 workers/thread size or more depending on your cpu cores.If all the threads have used so there are no other thread and the  waiting time of server is increased so it's better to use non-blocking.

//how to se your computer info?
const os=require("os")
console.log(os.cpus())


//blocking operatins(syncronious task)
console.log("1")
console.log("2")
console.log(fs.readFileSync("./test.txt","utf-8"))
console.log("3")

//non-blockig operations(asyncronious task)
console.log("1")
console.log("2")
fs.readFile('./test.txt','utf-8',function (err,result){
console.log(result)
})
console.log("3")