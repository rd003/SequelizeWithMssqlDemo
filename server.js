require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//parses incoming JSON data from the request body (post/put requests).
app.use(express.json());
//parse URL-encoded data from the request body.
// URL-encoded data is commonly used when submitting HTML forms via POST requests.
//The extended: true option allows for complex objects and arrays to be included in the form data.
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/people", require("./controllers/person.controller"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server listening on port " + port));
