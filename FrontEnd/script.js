// Élements DOM
const gallery = document.querySelector(".gallery");
const filters = document.querySelector(".filters");


// Fonction général
function main() {
    displayWorks();
}

main();

// Récupérations des éléments API

async function getWorks() {
    try {
        const worksResponse = await fetch("http://localhost:5678/api/works");
        return worksResponse.json();
    } catch (error) {
        console.log("Erreur lors de la récupération des projets depuis l'API")
    }
}

async function getCategories() {
    try {
        const categoriesResponse = await fetch("http://localhost:5678/api/categories");
        return categoriesResponse.json();
    } catch (error) {
        console.log("Erreur lors de la récupération des catégories depuis l'API")
    }
}

// Affichage de la gallerie

async function displayWorks(categorieId) {
    try {
        const addWorks = await getWorks();
        gallery.innerHTML = "";
        // Création de l'affichage dans la gallerie
        addWorks.forEach((works) => {
            if (categoryId == works.categoryId || categoryId == null) {
                createWorks(works);
            }
        });
    } catch (error) {
        console.log("Erreur lors de l'affichage de la gallerie")
    }
}

// Création des projets de la gallerie

function createWorks(works) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    figure.setAttribute = works.categoryId;
    img.src = works.imageURL;
    figcaption.innerText = works.tittle;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
}

// Affichage des bouttons filtres

async function btnFilters() {
    const addCategories = await getCategories();

    addCategories.forEach((category) => {
        createCategories()
    })
}

// Création des bouttons filtres

function createCategories(categories) {
    const filters = document.createElement("button");
    filters.innerText = category.name;
    filters.classList.setAttribute("filterBtn");
    filters.setAttribute(category.Id);
}

