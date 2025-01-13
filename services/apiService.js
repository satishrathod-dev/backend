const axios = require("axios");

const apiService = async () => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    // console.log(response.data);
    // console.log(response);
    // const data = await response.json;
    // console.log(data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

module.exports = apiService;

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
