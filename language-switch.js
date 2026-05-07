const currentPage =
window.location.pathname.split("/").pop();

/* VLASTNÍ PŘEKLADY STRÁNEK */

const customPages = {

    "knihy.html": "books.html",
    "books.html": "knihy.html",

    "kapitoly.html": "chapters.html",
    "chapters.html": "kapitoly.html",

    "kniha1.html": "book1.html",
    "book1.html": "kniha1.html"

};

let czPage = currentPage;
let enPage = currentPage;

/* NEJPRVE ZKUSIT VLASTNÍ MAPOVÁNÍ */

if (customPages[currentPage]) {

    if (currentPage.includes("_en") ||
        currentPage.includes("books") ||
        currentPage.includes("chapters") ||
        currentPage.includes("book")) {

        czPage = customPages[currentPage];

    } else {

        enPage = customPages[currentPage];

    }

}

/* KLASICKÝ _en SYSTEM */

else {

    if (currentPage.includes("_en")) {

        czPage =
        currentPage.replace("_en", "");

    } else {

        const dotIndex =
        currentPage.lastIndexOf(".");

        if (dotIndex !== -1) {

            enPage =
                currentPage.slice(0, dotIndex) +
                "_en" +
                currentPage.slice(dotIndex);

        }

    }

}

/* VYTVOŘENÍ PŘEPÍNAČE */

const switchDiv =
document.createElement("div");

switchDiv.className =
"language-switch";

switchDiv.innerHTML = `
<a href="${czPage}">🇨🇿</a>
<a href="${enPage}">🇬🇧</a>
`;

document.body.appendChild(switchDiv);
