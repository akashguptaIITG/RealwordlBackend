const bodyParser = require('body-parser');
const cors = require('cors');


// setup global middleware here
module.exports = (app) => {
  app.use(cors());
 
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
};