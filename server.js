const express = require('express');
const Database = require('./database.js');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(require("./routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
