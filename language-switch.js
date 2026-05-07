const currentPage =
window.location.pathname.split("/").pop();

/* MAPOVÁNÍ STRÁNEK */

const pageMap = {

    /* INDEX */

    "index.html": "index_en.html",
    "index_en.html": "index.html",

    /* MAIN */

    "hlavni.html": "hlavni_en.html",
    "hlavni_en.html": "hlavni.html",

    /* BOOKS */

    "knihy.html": "books.html",
    "books.html": "knihy.html",

    /* BOOK */

    "kniha1.html": "book1.html",
    "book1.html": "kniha1.html",

    /* CHAPTERS */

    "kapitoly.html": "chapters.html",
    "chapters.html": "kapitoly.html",

    /* CHAPTERS */

    "kapitola1.html": "chapter1.html",
    "chapter1.html": "kapitola1.html",

    "kapitola2.html": "chapter2.html",
    "chapter2.html": "kapitola2.html",

    "kapitola3.html": "chapter3.html",
    "chapter3.html": "kapitola3.html",

    "kapitola4.html": "chapter4.html",
    "chapter4.html": "kapitola4.html",

    "kapitola5.html": "chapter5.html",
    "chapter5.html": "kapitola5.html",

    "kapitola6.html": "chapter6.html",
    "chapter6.html": "kapitola6.html",

    "kapitola7.html": "chapter7.html",
    "chapter7.html": "kapitola7.html",

    "kapitola8.html": "chapter8.html",
    "chapter8.html": "kapitola8.html",

    "kapitola9.html": "chapter9.html",
    "chapter9.html": "kapitola9.html",

    "kapitola10.html": "chapter10.html",
    "chapter10.html": "kapitola10.html",

    /* CHARACTERS */

    "aaliyah.html": "aaliyah_en.html",
    "aaliyah_en.html": "aaliyah.html",

    "arondavinci.html": "arondavinci_en.html",
    "arondavinci_en.html": "arondavinci.html",

    "brienne.html": "brienne_en.html",
    "brienne_en.html": "brienne.html",

    "hugh.html": "hugh_en.html",
    "hugh_en.html": "hugh.html",

    "jacquehander.html": "jacquehander_en.html",
    "jacquehander_en.html": "jacquehander.html",

    "james.html": "james_en.html",
    "james_en.html": "james.html",

    "morrkalil.html": "morrkalil_en.html",
    "morrkalil_en.html": "morrkalil.html",

    "rowena.html": "rowena_en.html",
    "rowena_en.html": "rowena.html",

    "siennaparsons.html": "siennaparsons_en.html",
    "siennaparsons_en.html": "siennaparsons.html",

    "thomas.html": "thomas_en.html",
    "thomas_en.html": "thomas.html",

    "william.html": "william_en.html",
    "william_en.html": "william.html",

    "zarveth.html": "zarveth_en.html",
    "zarveth_en.html": "zarveth.html",

    /* CHARACTER PAGES */

    "postavy.html": "postavy_en.html",
    "postavy_en.html": "postavy.html",

    "postavy2.html": "postavy2_en.html",
    "postavy2_en.html": "postavy2.html",

    "postavy3.html": "postavy3_en.html",
    "postavy3_en.html": "postavy3.html",

    "postavy4.html": "postavy4_en.html",
    "postavy4_en.html": "postavy4.html",

    /* GALLERIES */

    "galerie.html": "gallery_en.html",
    "gallery_en.html": "galerie.html",

    "galerie2.html": "gallery2_en.html",
    "gallery2_en.html": "galerie2.html",

    "galerie3.html": "gallery3_en.html",
    "gallery3_en.html": "galerie3.html",

    "galerie4.html": "gallery4_en.html",
    "gallery4_en.html": "galerie4.html",

    "galerie5.html": "gallery5_en.html",
    "gallery5_en.html": "galerie5.html",

    "galerie6.html": "gallery6_en.html",
    "gallery6_en.html": "galerie6.html",

    "galerie7.html": "gallery7_en.html",
    "gallery7_en.html": "galerie7.html",

    "galerie8.html": "gallery8_en.html",
    "gallery8_en.html": "galerie8.html",

    "galerie9.html": "gallery9_en.html",
    "gallery9_en.html": "galerie9.html",

    /* LOCATIONS */

    "lokace.html": "locations.html",
    "locations.html": "lokace.html",

    "lokace2.html": "locations2.html",
    "locations2.html": "lokace2.html",

    "lokace_kastleton.html": "location_kastleton.html",
    "location_kastleton.html": "lokace_kastleton.html",

    "lokace_turayne.html": "location_turayne.html",
    "location_turayne.html": "lokace_turayne.html",

    "lokace_vez_cisteho_svetla.html": "location_purelight_tower.html",
    "location_purelight_tower.html": "lokace_vez_cisteho_svetla.html",

    "lokace_vienta.html": "location_vienta.html",
    "location_vienta.html": "lokace_vienta.html",

    "lokace_kamenny_strazce.html": "location_stonegard_castle.html",
    "location_stonegard_castle.html": "lokace_kamenny_strazce.html",

    /* LOCKED DOOR */

    "retezove_dvere.html": "retezove_dvere_en.html",
    "retezove_dvere_en.html": "retezove_dvere.html"

};

/* VÝCHOZÍ */

let czPage = currentPage;
let enPage = currentPage;

/* PŘEPÍNÁNÍ */

if (pageMap[currentPage]) {

    if (
        currentPage.includes("_en") ||
        currentPage.includes("chapter") ||
        currentPage.includes("gallery") ||
        currentPage.includes("location") ||
        currentPage.includes("books") ||
        currentPage.includes("book") ||
        currentPage.includes("characters")
    ) {

        czPage = pageMap[currentPage];

    } else {

        enPage = pageMap[currentPage];

    }

}

/* VYTVOŘENÍ SWITCH */

const switchDiv =
document.createElement("div");

switchDiv.className =
"language-switch";

switchDiv.innerHTML = `
<a href="${czPage}">🇨🇿</a>
<a href="${enPage}">🇬🇧</a>
`;

document.body.appendChild(switchDiv);
