var api = "https://rickandmortyapi.com/api/character";
var arrayData = [];

const consumoApi = () => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            let respuestaJson = data.results;
            //console.log(respuestaJson);

            arrayData = respuestaJson;

            for (const iterator of respuestaJson) {
                document.querySelector("#card").innerHTML +=  mostrarData(iterator);
            }

            

        })

        
        
}


const mostrarData = (iterator) => {
    //console.log(arrayData);

    
        return `
        <div class="col s12 m6">
        <div class="card">
            <div class="card-image">
                <img src="${iterator.image}">
                <span class="card-title" style="color: black;">${iterator.name}</span>
                
            </div>
            <div class="card-content">
                <p>Specie: ${iterator.species}</p>
                
            </div>
        </div>
    </div>
        `

    

    
}


const buscarPersonaje = (event) => {

    let valorCaja = event.value;
    //console.log(valorCaja);
    let encontroPersonaje = false;

    document.querySelector("#card").innerHTML = "";
    
    for(const iterator of arrayData){
        if (iterator.name.toUpperCase().indexOf(valorCaja.toUpperCase()) !== -1) {
            encontroPersonaje = true;
            document.querySelector("#card").innerHTML += mostrarData(iterator);
            //console.log(iterator.name);
            
        
        }
    }

    if (encontroPersonaje == false) {
        for(const iterator of arrayData){
            document.querySelector("#card").innerHTML += mostrarData(iterator);
    
        }
    }
}

consumoApi();

