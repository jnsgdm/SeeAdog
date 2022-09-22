async function dogBreeds(){
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const JSONres = await res.json();
    const data = JSONres.message;
    //console.log(data);
    
    const breedKeys = Object.keys(data);
    const arr = [];

    breedKeys.forEach( (e) =>{
        if(data[e].length > 0 ){
            for(var i = 0; i < data[e].length; i++){
                const firstBreedName = e;
                const lastBreedName = data[e];
                const fullBreedName = `${firstBreedName} ${lastBreedName[i]}`;
                arr.push(fullBreedName);
            }
        }else{
            arr.push(e);
        }
    });

    //generate the dogs breeds selection list 
    arr.forEach( (eachDog) =>{ 
        const createOptions = document.createElement('option');
        createOptions.setAttribute('id',`${eachDog}`);
        createOptions.setAttribute('value', `${eachDog}`);
        document.getElementById('dogList').appendChild(createOptions).innerHTML = eachDog;
    });
}

dogBreeds()