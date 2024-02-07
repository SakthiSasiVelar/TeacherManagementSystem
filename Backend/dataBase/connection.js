const mongoose = require("mongoose");

const connectToDataBase = async function () {
  try {
    const uri =
      "mongodb+srv://teacherManagementportal:portal123@cluster0.lf7zi6d.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database  successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDataBase;
