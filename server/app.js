const cors = require("cors");
const express = require("express");
const app = express();
const lightRing = require("./routes/lightRing");

const { PORT = 5000 } = process.env;

app.use(cors());
app.use("/api", lightRing);

//Error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
});

//Listen
app.listen(PORT, () => {
  console.log("Listen on " + PORT);
});
