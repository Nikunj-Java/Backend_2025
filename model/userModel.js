//const db= require('../config/db');

exports.createUser=(name,email,callbak)=>{
    const sql= 'INSERT INTO users (name,email) VALUES(?,?)';
    db.query(sql,[name,email],callbak);
}

exports.getAllUser=(callbak)=>{
    const sql= 'SELECT * FROM users';
    db.query(sql,callbak);
}

exports.getUserById=(id,callbak)=>{
    const sql= 'SELECT * FROM users WHERE  id= ?';
    db.query(sql,[id],callbak);
}

exports.updateUser=(id,name,email,callbak)=>{
    const sql= 'UPDATE users SET name=?, email=? WHERE  id= ?';
    db.query(sql,[name,email,id],callbak);
}

exports.deleteUser=(id,callbak)=>{
    const sql= 'DELETE FROM users WHERE id=?';
    db.query(sql,[id],callbak);
}