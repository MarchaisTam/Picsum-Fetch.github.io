let url = `https://picsum.photos/v2/list?limit=10&page=2`;
fetch(url)
.then(function(response){
    //console.log(response);
    if(response.ok){
        return Promise.resolve(response.json());
    }else{
        return Promise.reject(new Error("Erreur dans la requete"))
    }
}).then((data)=>{
    //console.log(data);
    placeHolder = data;
    data.forEach(element => {
        //console.log(element.author);
        //console.log(element.download_url);
        //console.log(element.url);
        creeCarte(element.author, element.download_url, element.url);
    });
    //display(data.author);
    //display(data.download_url);
}).catch(function(e){
    console.log(e);
})


function display(object){
    let body = document.querySelector("body");
    let p = document.createElement("p");
    p.textContent = object;
    body.append(p);
}

let main = document.querySelector("main");

function creeCarte(auteur, urlImage, url) {
    let grandeDiv = document.createElement("div");
    let image = document.createElement("img");
    let divTexte = document.createElement("div");
    let titreCarte = document.createElement("h1");
    let bouton = document.createElement("a");

    titreCarte.textContent = auteur;
    image.src = modifUrl(urlImage);
    bouton.textContent = "Visit";
    bouton.href = url;

    grandeDiv.classList.add("grandeDiv");
    image.classList.add("image");
    divTexte.classList.add("divTexte");
    bouton.classList.add("bouton");
    bouton.setAttribute("target", "_blank");

    main.append(grandeDiv);
    grandeDiv.append(divTexte);
    grandeDiv.append(image);
    divTexte.append(titreCarte);
    divTexte.append(bouton);

}

function modifUrl(url) {
    let urlModifie = "";
    for (let index = 0; index < (url.length - 9); index++) {
        urlModifie += url[index];
    }
    return urlModifie + "600/600";
}