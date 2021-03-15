require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { authenticateToken } = require("./middlewares/authenticateToken");

const challenge = require("./routes/challenge");
const getAllSubmissions = require("./routes/getAllSubmissions");
const getLeaderBoard = require("./routes/getLeaderBoard");
const getDefaultCode = require("./routes/getDefaultCode");

const PORT = process.env.PORT || 9998;

app.use(cors());
app.use(bodyParser.json());

(async () => {
  app.post("/challenge", challenge);
  app.post("/submissions", authenticateToken, getAllSubmissions);
  app.post("/leaderboard", getLeaderBoard);
  app.post("/defaultCode", getDefaultCode);
  app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
})();
