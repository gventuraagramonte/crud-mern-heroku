"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { mongoose } = require("./database");
const hostname = "localhost";
const port = 3001;
const app2 = express();

app2.use(
  cors({
    credentials: true,
    origin: true
  })
);

app2.options("*", cors());

app2.set("port", process.env.PORT || 3001);

app2.use(morgan("dev"));
app2.use(express.json());

app2.use("/api/tasks", require("./routes/task.routes"));

app2.use(express.static(path.join(__dirname, "public")));

// app2.listen(app2.get("port"), () => {
//   console.log(`Server on port ${app2.get("port")}`);
// });

app2.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
