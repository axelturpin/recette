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
    e.preventDefault()
    const nom = document.querySelector(".nom").value;
    const type = document.querySelector(".type").value;
    const description = document.querySelector(".description").value;
    const ingrédients = document.querySelector(".ingrédients").value;
    console.log(nom);
})