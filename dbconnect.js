const express = require('express')
const mysql = require('mysql2');

require('dotenv').config({path: '../.env'})


const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    port:process.env.DATABASE_PORT,
    database: process.env.DATABASE
 
 });

 connection.connect( (err) =>{
    if(err){

        console.log(err)
        
    }else{
        console.log("MYSQL CONNECTED...")
    }
 })

 

module.exports = connection