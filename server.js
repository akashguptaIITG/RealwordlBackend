const express = require('express');
const {db} =require('./models/db');

const app = express();
const port = 3000;

// setup the Express middlware
require('./middleware/middleware')(app);

// setup the api routes
require('./routes')(app);


//listening for connection
db.sync({
  //force:true
}).then(()=>{
  app.listen(port, () => {
    console.log('running server on port ' + port);
  });
});
