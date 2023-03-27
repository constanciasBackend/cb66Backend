const mysql = require('mysql2');

const ccn = mysql.createConnection({
    host: 'bl2cemmlo8bhrr3qulwy-mysql.services.clever-cloud.com',
    port: '3306',
    user: 'utxvwkfi5fmzpjyl',
    database:'bl2cemmlo8bhrr3qulwy',
    password : '1nRSoX9bvF9DmjLQQSwo'
});
 
/*const ccn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database:'constancias',
    password : 'juanito'
});*/

ccn.connect (err=>{
    if (err){
        console.log("no connection error: " + err);
    }else{
        console.log("Bd Connect");
    }
});

module.exports = ccn;