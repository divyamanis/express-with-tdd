const app = require("./src/server");
const config = require("./src/config/config");
const connection = require('./src/config/database');
(async () => await connection())();
app.listen(config.server.port,(err)=>{
    if(err){
        process.exit(0)
    }
    console.log(`Server running at ${config.server.port}`)
})