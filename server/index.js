require("dotenv").config();
const mongoose = require ("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB bağlandı!"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

app.get("/", (req, res) => {
  res.json({
    message: "Server çalışıyor!"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server http://localhost:" + PORT + " adresinde çalışıyor.");


});