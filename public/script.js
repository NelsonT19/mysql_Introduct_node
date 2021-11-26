function verCidades(){
    fetch('http://localhost:5000/city') // <= api fetch.
    .then(res => res.json())
    .then(data => proccesData(data))
    .catch((err)=>{
        alert('Ocorreu um erro...')
    })
}

function proccesData(data){

    const tabela = document.getElementById('tabela')
    tabela.innerHTML=""
    for( var i=0;i<9;i++){
        let city = data[i].Name
        let dis = data[i].District
        let pop = data[i].Population
        let row = `
        <tr>
            <td>${city}</td>
            <td>${dis}</td>
            <td>${pop}</td>
        
        </tr>`
        tabela.innerHTML += row
    }
}


function cleanDiv(){

    const cidadesDiv = document.getElementById('tabela')
    cidadesDiv.innerHTML=""
}

