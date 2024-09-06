const express = require('express')
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express()
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/amand_pune", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGODB CONNECTED"))
  .catch((e) => console.log(e));
  


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
    res.json('Hello world');
})

app.listen(3000, () => {
    console.log('Listening on port number 3000')
})