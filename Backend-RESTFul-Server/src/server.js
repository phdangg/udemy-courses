require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine')
const app = express();
const webRouters = require('./routes/web')

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//Config template engine
configViewEngine(app);

//Declare Route
app.use('/',webRouters)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})