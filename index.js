const express = require('express')
const path = require('path')
const mysql = require('mysql2');
const app = express()
const PORT = 5000;

require('dotenv').config({path: './.env'})


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

//cliente so tem acesso ao public
app.use(express.static('./public'))


// pedido em http://localhost:5000\
app.get('/',(req, res) => {
 res.sendFile(path.join(__dirname,'/public/index.html'))
})



app.listen(PORT, function(){
    console.log(`Server is running on PORT: ` + PORT);
 });

// pedido em http://localhost:5000/city
app.get('/city',(req, res) => {
    connection.query("SELECT * FROM city",(err,result) =>{
        if(err){
            console.log(err)
            console.log('Deu m****')
        }else{
            res.json(result)
        }

   })
   
})
