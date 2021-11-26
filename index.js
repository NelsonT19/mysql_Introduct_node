const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000;

//defenir as rotas
app.use('/city',require('./routes/getCitiesRoute'))

//cliente so tem acesso ao public
app.use(express.static('./public'))

// pedido em http://localhost:5000\
app.get('/',(req, res) => {
 res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.listen(PORT, function(){
    console.log(`Server is running on PORT: ` + PORT);
 });



