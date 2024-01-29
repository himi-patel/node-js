function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}

// module.exports=add

// module.exports=add(2,5)

// module.exports=
// {
//     add,
//     sub
// }

// module.exports=
// {
//    "addfn":add,
//     "subfn":sub
// }


exports.add=(a,b)=> a+b
exports.sub=(a,b)=> a-b