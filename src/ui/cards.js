export function afficherCartes(series) {
    const container = document.getElementById("list_des_serie");

    container.innerHTML = "";
   console.log("series dans cards :", series);
    series.forEach(function(serie) {

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
                  div_genre.append(genre)
        });
       const langue = document.createElement("h6");
             langue.textContent = `language :  ${serie.language}` ;
       const div_button = document.createElement("div");
             div_button.className = "d-flex gap-3 p-3  rounded-3";

       const button_supprimer = document.createElement("button");
             button_supprimer.className = "btn btn-outline-danger w-100 rounded-pill";
             button_supprimer.textContent = "Supprimer";

       const button_modifier = document.createElement("button");
             button_modifier.className = "btn btn-light w-100 rounded-pill";
             button_modifier.textContent = "Modifier";

                div_button.append(button_supprimer, button_modifier);
                body.append(titre, div_genre, descreption,langue, div_button);

        container.append(col);
    });
}


