const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/restaurant/menu/foods", require("./routes/foodRoute"));
app.use("/restaurant/menu/drinks", require("./routes/drinkRoute"));
app.use("/restaurant/transactions", require("./routes/transactionRoute"));

// Health check endpoint
app.get("/health", (req, res) => {
  const ip =
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    "Unknown";
  res.status(200).json({
    status: "ok",
    ip: ip,
    timestamp: new Date().toISOString(),
  });
});

app.use(errorHandler);

app.listen(port, () => console.log(`it's alive on http://localhost:${port}`));
