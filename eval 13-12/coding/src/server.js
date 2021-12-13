const app = require('./index');
const connect = require('./config/db');



app.listen(1234, async () => {

   await connect();
    console.log("listening on port 1234...");

});
