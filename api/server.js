const server = require('./app.js');
const { conn } = require('./db.js');
//const app = require("./app");
require('dotenv').config();
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
      console.log('%s listening at', process.env.PORT); 
    });
  });

