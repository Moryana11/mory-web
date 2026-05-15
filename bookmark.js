// unikátní klíč pro každou kapitolu
const storageKey = "bookmark-" + window.location.pathname;

// přidání ID všem odstavcům
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p, index) => {
    p.dataset.bookmarkId = index;

    // kliknutí na odstavec uloží záložku
    p.addEventListener("click", () => {

        localStorage.setItem(storageKey, index);

        // odstranění starého zvýraznění
        paragraphs.forEach(el => {
            el.style.background = "";
            el.style.transition = "";
        });

        // zvýraznění vybraného odstavce
        p.style.background = "rgba(255, 215, 0, 0.15)";
        p.style.transition = "0.3s";
    });
});

// po načtení obnoví bookmark
window.addEventListener("load", () => {

    const savedBookmark = localStorage.getItem(storageKey);

    if (savedBookmark !== null) {

        const target = document.querySelector(
            `[data-bookmark-id="${savedBookmark}"]`
        );

        if (target) {

            // scroll na odstavec
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // zvýraznění
            target.style.background = "rgba(255, 215, 0, 0.15)";
            target.style.transition = "0.3s";
        }
    }
});
