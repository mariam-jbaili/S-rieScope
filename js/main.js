
import { afficherCartes } from "../src/ui/cards.js";
import {
    getAll,
    updateSerie,
    ajouter,
    getByGenre,
    getBynom,
    filtrerSeries
} from "../src/services/serieService.js";
import { idmodifier, setIdModifier } from "../src/data/store.js";

async function chargerSeries() {
    try {
        const series = await getAll();
         remplirGenres(series); 
         afficherCartes(series);
    
    } catch (error) {
        console.log(error);
    }
}
chargerSeries();
      const button_ajouter = document.getElementById("btn_ajouter");
      const form_ajouter = document.getElementById("form_ajouter");
            button_ajouter.addEventListener("click", async function (event) {
                event.preventDefault()
                if (!validerFormulaire()) {
                        return;
                }
                const data = {
                    name: document.getElementById("nom_serie").value,
                    genres: document.getElementById("Genre_ajouter").value.split(","),
                    language: document.getElementById("langue").value,
                    summary: document.getElementById("Description").value
                };
              
            if (idmodifier !== null) {
                  await updateSerie(idmodifier, data);
                  console.log("Série modifiée avec succès !")
                  
                  
                         button_ajouter.textContent = "+Ajouter";
                   setIdModifier(null);

            }else{
                await ajouter(data);
                console.log("Série ajouter avec succès !")
            }
             
                   form_ajouter.reset()
      
                  await chargerSeries();

            })


async function felter() {
    try {
        const genre = select_genre.value;
        const nom = nom_rechrche.value;
        if (genre === "" &&  nom !== "" ) {
            const series = await getBynom(nom);
            afficherCartes(series);
        } else if(genre !== ""  && nom !== ""){
            const series = await filtrerSeries(nom, genre);
            afficherCartes(series);
        
        } else if ( nom === "" && genre !== "" ){
           const series = await getByGenre(genre);
                 afficherCartes(series);  
        }else {
            chargerSeries()
        }


    } catch (error) {
        console.log(error);
    }
}

const select_genre = document.getElementById("genre");
      select_genre.addEventListener("change", felter);
const nom_rechrche = document.getElementById("recherche");
      nom_rechrche.addEventListener("input", felter);






function remplirGenres(series) {

    let genres = [];

    series.forEach(function(serie) {

        serie.genres.forEach(function(genre) {

            if (!genres.includes(genre)) {
                genres.push(genre);
            }

        });

    });
    genres.forEach(function(genre) {

        const option = document.createElement("option");

        option.value = genre;
        option.textContent = genre;

        select_genre.appendChild(option);

    });

}


async function reinitialiserFiltres() {

    nom_rechrche.value = "";
    select_genre.value = "";
    await chargerSeries();
}
  const btn_Reinitialiser = document.getElementById("Reinitialiser");
        btn_Reinitialiser.addEventListener("click", reinitialiserFiltres);

function validerFormulaire() {

    const nom = document.getElementById("nom_serie");
    const genre = document.getElementById("Genre_ajouter");
    const langue = document.getElementById("langue");

    const erreurName = document.getElementById("erreurName");
    const erreurGenre = document.getElementById("erreurGenre");
    const erreurLangue = document.getElementById("erreurLangue");

    let valide = true;

   
    if (nom.value.trim() === "") {
        erreurName.textContent = "Le nom est obligatoire";
        valide = false;
    } else if (nom.value.trim().length < 2) {
        erreurName.textContent = "Le nom doit contenir au moins 2 caractères";
        valide = false;
    } else {
        erreurName.textContent = "";
    }
    if (genre.value.trim() === "") {
        erreurGenre.textContent = "Le genre est obligatoire";
        valide = false;
    } else {
        erreurGenre.textContent = "";
    }

    if (langue.value.trim() === "") {
        erreurLangue.textContent = "La langue est obligatoire";
        valide = false;
    } else {
        erreurLangue.textContent = "";
    }

    return valide;
}















