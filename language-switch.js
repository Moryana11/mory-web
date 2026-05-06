const currentPage = window.location.pathname.split("/").pop();

let czPage = currentPage;
let enPage = currentPage;

/* EN stránka → CZ */

if (currentPage.includes("_en")) {

    czPage = currentPage.replace("_en", "");

} else {

    /* CZ stránka → EN */

    const dotIndex = currentPage.lastIndexOf(".");

    if (dotIndex !== -1) {

        enPage =
            currentPage.slice(0, dotIndex) +
            "_en" +
            currentPage.slice(dotIndex);

    }

}

/* VYTVOŘENÍ PŘEPÍNAČE */

const switchDiv = document.createElement("div");

switchDiv.className = "language-switch";

switchDiv.innerHTML = `
<a href="${czPage}">🇨🇿</a>
<a href="${enPage}">🇬🇧</a>
`;

document.body.appendChild(switchDiv);
