async function generateDogImage(){
    const selectId = document.getElementById('dogList');
    const valueOptions = selectId.options[selectId.selectedIndex].value;
    const btn = document.getElementById('chooseDog');
    btn.setAttribute('value',valueOptions);
    const dogName = btn.value;
    const arrDogName = dogName.split(' '); 
    //console.log(dogName.split(' '));

    if(arrDogName.length === 2){ 
        const res = await fetch(
            `https://dog.ceo/api/breed/${arrDogName[0]}/${arrDogName[1]}/images/random`
        );
        const JSONres = await res.json();
        const urlDogImage = JSONres.message;
        const dogImage = document.getElementById('dogImage');
        dogImage.style.backgroundImage = `url(${urlDogImage})`;    
    }else{ //breed with 1 name
        const res = await fetch(
            `https://dog.ceo/api/breed/${dogName}/images/random`
        );
        const JSONres = await res.json();
        const urlDogImage = JSONres.message;
        const dogImage = document.getElementById('dogImage');
        dogImage.style.backgroundImage = `url(${urlDogImage})`;
    }
    
    const dogImage = document.getElementById('dogImage');
    const sizeImg = document.querySelector(".size-img");
    console.log(dogImage.style.backgroundImage);
    if(dogImage.style.backgroundImage.length > 1){
        sizeImg.hidden = false
        dogImage.hidden = false
    }
}

generateDogImage();