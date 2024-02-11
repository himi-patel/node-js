const mongoose = require("mongoose");

async function connectdb(url)
{
    return mongoose.connect(url)
}
moduleexports=connectdb;