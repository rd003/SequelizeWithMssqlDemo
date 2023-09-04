const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
// app.use("/", (req, res) => {
//   res.send("welcome..");
// });
app.use("/api/people", require("./controllers/person.controller"));

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;

app.listen(port, () => console.log("Server listening on port " + port));
