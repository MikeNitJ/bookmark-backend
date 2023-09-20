require("dotenv").config();
const express = require('express')
const app = express()
const PORT = 3000
const morgan = require("morgan");
// const bookmarkController = require("./controller/bookmarkController")
const bookmarkController = require("./controller/bookmarkController");
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true}));

app.use("/book", bookmarkController);

app.listen(PORT, () => console.log(PORT, "is coming"))