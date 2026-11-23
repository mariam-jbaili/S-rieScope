import api from "./api.js";
export async function getAll() {
      
      try {
           const response = await api.get("/series");
            return  response.data;
            
      } catch (error) {
            console.log(error.message);
            
      }
    
}
export async function getById(id) {
    try {
        const response = await api.get(`/series/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
export async function updateSerie(id, data) {
    try {
        const response = await api.patch(`/series/${id}`, data);
        return response.data;
    } catch (error) {
        console.log(error.message);
        
    }
}
export async function ajouter( data) {
    try {
        const response = await api.post("/series", data)
        return response.data;
    } catch (error) {
         
        console.log("Erreur détaillée :", error.response.data);

        throw error;
    }
    
}
export async function Supprimer(id) {
    try {
        const response = await api.delete(`/series/${id}`);
        return response.data;
    } catch (error) {
         
        console.log("Erreur détaillée :", error.response.data);

        throw error;
    }
    
}
export async function getByGenre(genre) {
    const response = await api.get("/series", {
        params: {
            genre: genre
        }
    });

    return response.data;
}
export async function getBynom(nom) {
    const response = await api.get("/series", {
        params: {
            name: nom
        }
    });

    return response.data;
}

export async function filtrerSeries(nom, genre){
    const response = await api.get("/series", {
        params: {
            name: nom,
            genre: genre
        }
    });

    return response.data;
}