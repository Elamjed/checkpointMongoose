const express = require("express");
const Connect = require("./config/Connect");
Connect();

const app = express();
const bodyParser = require("body-parser");
app.use('/api/Person',require('./routes/Router'));


const port = 4000;
app.listen(port, () => {
  console.log(
    `Connected at http://localhost:${port}`
  );
});