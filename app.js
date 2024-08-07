const express = require("express");
const db = require("./config/db");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const userRouter = require("./routers/user.router");
const todoRouter = require("./routers/todo.router");

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/", todoRouter);

module.exports = app;