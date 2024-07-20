require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./router/users/users");
const notesRouter = require("./router/notes/notesRouter");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", userRouter);
app.use("/notes", notesRouter);

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Databse connected successfully");
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
