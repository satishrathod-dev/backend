# Product Transactions API

This backend project fetches product transaction data from a third-party API, stores it in a database, and provides endpoints to query and analyze the data.

---

## Features
1. **Database Initialization**: Fetches data from the third-party API and seeds it into the database.
2. **List Transactions**: Supports search and pagination for product transactions.
3. **Statistics**: Provides total sales amount, sold items, and unsold items for a given month.
4. **Bar Chart Data**: Returns price ranges and the number of items in those ranges for a selected month.
5. **Pie Chart Data**: Lists unique categories and the number of items in each category for a selected month.
6. **Combined API**: Combines responses from multiple APIs into a single output.

---

## Setup
1. Clone the repository:
   git clone: https://github.com/satishrathod-dev/product-transactions-backend.git
   cd product-transactions-backend





# Install dependencies:
npm install


# Configure the environment variables in a .env file:

MONGO_URI=mongodb://localhost:27017/product_transactions
PORT=5000
THIRD_PARTY_API=https://s3.amazonaws.com/roxiler.com/product_transaction.json
# Start the server:
npm start


# API Overview:
This project provides multiple endpoints to fetch and analyze transaction data. Key functionalities include:

- Fetching and storing data from a third-party API.
- Searching and paginating product transactions.
- Generating statistical data for sales and items sold/unsold.
- Providing data for bar charts and pie charts based on transactions.
- For detailed endpoint documentation, refer to the code or API documentation.

# Tech Stack
Backend: Node.js, Express.js
Database: MongoDB

