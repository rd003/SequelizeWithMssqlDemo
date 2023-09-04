var Connection = require("tedious").Connection;

var config = {
  server: "localhost", // or "localhost"
  options: {
    encrypt: false, // disable encryption
  },
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "sa@123",
    },
  },
};

var connection = new Connection(config);

// Setup event handler when the connection is established.
connection.on("connect", function (err) {
  if (err) {
    console.log("Error: 💩💩 ", err);
  } else {
  }
});

// Initialize the connection.
connection.connect();
