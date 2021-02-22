require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { authenticateToken } = require("./middlewares/authenticateToken");

const challenge = require("./routes/challenge");
const PORT = process.env.PORT || 9998;

app.use(cors());
app.use(bodyParser.json());

(async () => {
  app.post("/challenge", authenticateToken, challenge);
  app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
})();
