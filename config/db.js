const mysql2=require('mysql2');
const dotenv=require('dotenv');

dotenv.config();

//creating dtabase connectivity
const db= mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nikunj@123',
    database: 'testdb',
})

db.connect((err)=>{
    if(err) throw err;
    console.log('Connected to DB!');
})

module.exports=db;

