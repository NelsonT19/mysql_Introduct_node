function verCidades(){
    fetch('http://localhost:5000/city') // <= api fetch.
    .then(res => res.json())
    .then(data => proccesData(data))
    .catch((err)=>{
        alert('Ocorreu um erro...')
    })
}

function proccesData(data){

    const cidadesDiv = document.getElementById('cidades')
    cidadesDiv.innerHTML=""
    for( var i=0;i<9;i++){
        let city = data[i].Name
        let row = `<h2>${city}</h2>`
        cidadesDiv.innerHTML += row
    }
}


function cleanDiv(){

    const cidadesDiv = document.getElementById('cidades')
    cidadesDiv.innerHTML=""
}