const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactROUTE = require("./route/contactRoute");
require("dotenv").config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", contactROUTE);


//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Database is connected successfully`);
  })
  .catch((err) => {
    console.error(err);
  });

//create a server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
