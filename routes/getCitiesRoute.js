const express = require('express')
const getRouter = express.Router()
const connection = require('../dbconnect.js')

 // pedido em http://localhost:5000/city
 getRouter.get('/',(req, res) => {
    connection.query("SELECT * FROM city",(err,result) =>{
        if(err){
            console.log(err)
            console.log('Deu m****')
        }else{
            res.json(result)
        }

   })
   
})

module.exports = getRouter