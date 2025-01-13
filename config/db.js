const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    // const response =
    //   "https://s3.amazonaws.com/roxiler.com/product_transaction.json";
    // console.log(response);
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1); // exit if connection fails
  }
};

module.exports = connectDb;

// app.get("/apidata", async (req, res) => {
//   try {
//     const response = await axios(
//       "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
//     );
//     const data = await response.data;
//     console.log(response.data);
//     res.send(response.data);
//   } catch (err) {
//     console.error(err);
//   }
// });
