// console.log("hiii it's me!!")



var slugify = require('slugify')

let a=slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
let b=slugify('some s@@#$tring', '/')  // some_string
console.log(b)