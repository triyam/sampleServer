const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));

app.get("/", async (req, res) => {
    console.log("Hello");
    res.status(201).json({ message: "Hello world!!"})
})
const port = process.env.PORT;
console.log(port);

app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
});