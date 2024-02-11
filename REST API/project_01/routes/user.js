const express=require("express")
const router=express.Router()

//REST API
router.get("/",async (req, res) => {
    const allUser=await User.find({})
  return res.json(allUser);
});

// router.get("/api/users/:id",(req,res)=>
// {
//     const id=Number(req.params.id)
//     const user=users.find((user)=>user.id===id)

//   res.json(user)

// })

// if all the path are same then use route

router
  .route("/:id")
  .get(async(req, res) => {
    const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    const user=await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: "User Not Found" });
    res.json(user);
  })
  .patch(async(req, res) => {
    // const id = Number(req.params.id);
    await User.findByIdAndUpdate(req.params.id,{lastName:"changed"})
    // const user = users.find((user) => user.id === id);

    return res.json({message:"success"});
  })
  .delete(async(req, res) => {
    // const id = Number(req.params.id);
    await User.findByIdAndDelete(req.params.id)
    // const user = users.find((user) => user.id === id);
    return res.json({message:"success"});
  });



router.post("/", async(req, res) => {
  const body = req.body;

  console.log(body)
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender||
//     !body.job_title
//   ) {
//     return res.status(400).json({ msg: "all message are required" });
//   }

  const result=await User.create({
    firstname:body.first_name,
    lastname:body.last_name,
    email:body.email,
    gender:body.gender,
    jobtitle:body.job_title,


  });
  console.log("result",result)
  
  return res.status(201).json({ msg:"success"});


//   console.log({...body})
//   users.push({...body,id: users.length+1})
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.status(201).json({ status: "success", id: users.length });
//   });
//   console.log("body",body)
});
module.exports=router