

let series = [];
let table_genre = [] ;




const nom_serie = document.getElementById("nom_serie");
const genres_serie = document.getElementById("Genre_ajouter");
const descreption_ajout =document.getElementById("Description");


async function recupererSeries() {
    try {
       

 
             const response = await fetch("https://api.tvmaze.com/shows?page=0");
             const data = await response.json();
             console.log(data[0])
             series = data.slice(0, 20);
             afficherSeries(series);
             souvordage() 
        



    } catch (error) {
        console.log("Erreur :", error.message);
    }
}
recupererSeries()

function souvordage() {
    localStorage.setItem("series",JSON.stringify(series));
    
}
// la function d'affichage 
function afficherSeries(liste) {
    console.log("liste:", liste);
    const list_series = document.getElementById("list_des_serie");
           list_series.innerHTML = "";
  
    liste.forEach(function (serie) {
        const col = document.createElement("div");
              col.className = "col";

        const carte = document.createElement("div");
              carte.className = "card h-100 bg-dark text-white border-secondary";

        col.append(carte);

        const image = document.createElement("img");
              image.className = "card-img-top";
        if (serie.image && serie.image.medium) {
              image.src = serie.image.medium;
        } else {
             image.src = "https://via.placeholder.com/210x295?text";
         }


        const body = document.createElement("div");
        body.className = "card-body";

        carte.append(image, body);


        const titre = document.createElement("h4");
              titre.className = "card-title";
              titre.textContent = serie.name;
              image.alt = serie.name;

        const descreption = document.createElement("p");
              descreption.className = "card-text text-secondary small ";
        let texte = serie.summary;
        if (texte.length > 100) {
            texte = texte.slice(0, 100) + "...";
        }
        descreption.innerHTML = texte;


        const div_genre = document.createElement("div");
              div_genre.className = "d-flex flex-wrap gap-2";
        serie.genres.forEach(element => {
            const genre = document.createElement("span")
            genre.className = "badge text-bg-secondary"
            genre.textContent = element;
            if (!table_genre.includes(element)) {
                table_genre.push(element) 
            }
            div_genre.append(genre)
        });
        body.append(titre, div_genre, descreption);

        list_series.append(col);
        


    });
     remplirGenres()
}

// la function recherche 

const nom_rechrche = document.getElementById("recherche");
      nom_rechrche.addEventListener("input", filtrerSeries);
const genre_value = document.getElementById("genre");
      genre_value.addEventListener("change", filtrerSeries);
function filtrerSeries() {
    let nom = nom_rechrche.value.toLowerCase()
    
    const rechrche = series.filter(function (serie) {
        const  tri_rechrche = serie.name.toLowerCase().startsWith(nom) 
        const  tri = genre_value.value === "" || serie.genres.includes(genre_value.value);
        return  tri_rechrche && tri 

    }) 
    return afficherSeries(rechrche)
}

 console.log(table_genre)


// remlire les genres 

function remplirGenres() {
    console.log("ola")
     const select_genre = document.getElementById("genre");
  
     for (let i = 0; i < table_genre.length; i++) {
        const  crea_genre = document.createElement("option");
         crea_genre.textContent =  table_genre[i]
          select_genre.append(crea_genre);
      }
 }

 // function ajouter 

 function ajouterSerie() { 
      const nouvelle_serie = {
             name: nom_serie.value ,
             genres: genres_serie.value.split(","),
             summary:descreption_ajout.value 
             
      }
       
      if (!validerFormulaire()) return;
     
    series.push(nouvelle_serie)
     afficherSeries(series)
     form.reset();
      erreurName.textContent = ""
      erreurGenre.textContent = ""
     souvordage()

     

 }  
 const form = document.getElementById("form_ajouter")
 const botton_ajouter = document.getElementById("btn_ajouter")
       botton_ajouter.addEventListener("click",function (e) {
          e.preventDefault(); 
          ajouterSerie()
         
       } );

// validation de forme 

function validerFormulaire() {
    
  const erreurName = document.getElementById("erreurName");
  const erreurGenre = document.getElementById("erreurGenre");
      
    let valide = true;

    if (nom_serie.value.trim() === "") {
        erreurName.textContent = "Ce champ est obligatoire"
        valide = false;
    } else {
        erreurName.textContent = ""
    }

    if (genres_serie.value === "") {
        erreurGenre.textContent = "Ce champ est obligatoire"
        valide = false;
    } else {
        erreurGenre.textContent = ""
    }
    return valide;
 }




         