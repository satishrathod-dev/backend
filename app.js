const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const Transaction = require("./schema/Transaction");
const apiService = require("./services/apiService");
const { ConnectionStates } = require("mongoose");

const app = express();

// middleware to parse the json data
app.use(express.json());

// Enabling cors
app.use(
  cors()
  // origin: 'http://localhost:3001', // Allow requests from frontend
  // methods: 'GET', // Only allow GET requests from frontend
  // allowedHeaders: 'Content-Type'
);

// connect to MongoDB
connectDb();

// app.get("/api", async (req, res) => {
//   try {
//     const transactions = await Transaction.find(); // Fetch all transactions from the 'Transaction' collection
//     res.status(200).json(transactions); // Send the transactions as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message }); // Handle any errors that occur
//   }
//   console.log("Hey there from backend!");
//   // res.send("Server is up and running...");
// });

app.get("/api/getData", async (req, res) => {
  try {
    const data = await apiService();
    console.log(data);

    // Itering over each data and storing each fields data in mongoD
    for (const item of data) {
      const transaction = new Transaction({
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        sold: item.sold,
        dateOfSale: new Date(item.dateOfSale), // converting string to date(as I am getting date in string format from api)
      });
      // save each transaction in the database
      await transaction.save();
    }
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).send("Error populating data in the database" + error);
  }
});

// app.post("/testInsert", async (req, res) => {
//   try {
//     const newTransaction = new Transaction({
//       transactionId: "txn12345",
//       amount: 500.75,
//       productName: "Product A",
//     });
//     await newTransaction.save();
//     // res.status(200).json("newTransaction", newTransaction);
//     res.send(200).json({
//       message: "Transaction added successfully",
//       transaction: newTransaction,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });
// app.get("/apiData", async (req, res) => {
//   try {
//     const newTransaction = new Transaction({});
//     await newTransaction.save();
//     // res.status(200).json("newTransaction", newTransaction);
//     res.send(200).json({
//       message: "Transaction added successfully",
//       transaction: newTransaction,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

apiService();
// app.get("/", (req, res, next) => {
//   // res.send("Server is up and running...");
//   next();
//   console.log("Hey");
// });

// app.get("/apidata", async (req, res) => {});

const port = 5000;
app.listen(port, () => {
  console.log("Hey there!");
  console.log(`Server started on port ${port}`);
});
// app.listen(port, "0.0.0.0", () => {
//   console.log(`Server running on http://0.0.0.0:${port}`);
// });
