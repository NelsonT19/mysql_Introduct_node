function verCidades(){
    fetch('http://localhost:5000/city') // <= api fetch.
    .then(res => res.json())
    .then(data => {
        console.log(data.length)
        for(i = 0;i<data.length;i++){
            console.log(data[i].Name)
        }
    })
    .catch((err)=>{
        alert('Problema de juntas...')
    })
}