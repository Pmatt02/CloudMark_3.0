// importiamo il modulo mysql
const mysql = require("mysql");
// otteniamo le credenziali per la connessione con il db
const connectionDb = mysql.createConnection({
    user: "root",
    password: "Password01!",
    database: "cloudmark",
    host: "database-classicmodels.cetsul63nyeq.eu-south-1.rds.amazonaws.com",
    port: "3306",
});
// controllo connessione
connectionDb.connect((err)=>{
    if(err){
        return console.log(err) 
    }
    console.log("Connesso..")
    
});
// esportiamo la connessione al db
module.exports = connectionDb