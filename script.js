// Gestionnaire
// de recettes de cuisine
// Ajouter
//     / modifier / supprimer des recettes
// Catégoriser
//     par type (entrée, plat, dessert)
// Filtrer
//     par catégorie ou ingrédients
// Sauvegarde
//     en LocalStorage
// Recettes
//     favorites

const btn = document.querySelector(".btn_ajout");
btn.addEventListener("click", (e)=> {
    e.preventDefault();
    let recettes = document.createElement("div");
    if (localStorage.getItem("recettes")){
        recettes = JSON.parse(localStorage.getItem("recettes"));
    }

    const nom = document.querySelector("#nom").value;
    const type = document.querySelector("#type").value;
    const description = document.querySelector("#description").value;
    const ingrédients = document.querySelector("#ingrédients").value;

    const divNom = document.createElement("p").textContent = nom;
    const divType = document.createElement("p").textContent = type;
    const divDescription = document.createElement("p").textContent = description;
    const divIngrédients = document.createElement("p").textContent = ingrédients;
    // console.log(divDescription);

    const recette = document.createElement("div");
    recette.append(divNom, divType, divDescription, divIngrédients);
    // console.log(recette);

    recettes.appendChild(recette);
    // console.log(recettes);
    localStorage.setItem("recettes", JSON.stringify(recettes));

    const liste = document.querySelector(".liste");
    liste.appendChild(recettes);
})