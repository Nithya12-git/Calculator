const express = require("express");
const cors = require("cors");

require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Calculator Backend Running");
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
const historyRoute = require("./routes/history");

app.use(historyRoute);