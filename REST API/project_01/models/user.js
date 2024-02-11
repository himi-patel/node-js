const userSchema = new mongoose.Schema({
    firstname: {
      required: true,
      type: String,
    },
    lastname: {
      required: true,
      type: String,
    },
    email:
    {
      required: true,
      type: String,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    jobtitle:
    {
      type: String,
    },
  },{timestamps:true}
  );
  const User=mongoose.model("user",userSchema)

  module.exports = User;