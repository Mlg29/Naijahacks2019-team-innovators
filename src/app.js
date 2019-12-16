const express = require("express");
const cors = require("cors");
var http = require("http");

require("./db/db");
const userRouter = require("./controllers/user");
const wasteRouter = require("./controllers/waste");
const vehicleRouter = require("./controllers/vehicle");

const app = express();

app.use(express.urlencoded({ extended: false }));
/**
 * Read environment variables
 */
require("dotenv").config();

/**
 * cross origin resort sharing
 */
app.use(cors());

app.use(express.json());

/**
 * Base Route
 */
app.use("/users", userRouter);
app.use("/wastes", wasteRouter);
app.use("/vehicles", vehicleRouter);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
const port = process.env.PORT || 5000;

server.listen(port);
server.on("error", err => {
  console.log(`Server running on port ${err}`);
});
server.on("listening", () => {
  console.log(`Server running on port ${port}`);
});
