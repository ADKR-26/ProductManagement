const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require('./Routes/product');
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT | 8000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(routes)

app.listen(PORT, () => console.log("Server running on port " + PORT));