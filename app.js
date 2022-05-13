const express = require("express");
const app = express();
app.use(express.json());

const routes = require("./routes/users");
routes(app);

app.listen(3000, () =>
  console.log(`Start server on port 3000 at:\n ${new Date()}`))