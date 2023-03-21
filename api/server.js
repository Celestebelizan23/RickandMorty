const server = require('./app.js');
const { conn } = require('./db.js');
const app = require("./app");


conn.sync({ force: false }).then(() => {
    server.listen(3005, () => {
      console.log('%s listening at 3005'); 
    });
  });

