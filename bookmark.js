const storageKey = "text-bookmark-" + window.location.pathname;

// vytvoření tlačítka
const bookmarkButton = document.createElement("button");
bookmarkButton.innerText = "📖 Zapamatovat místo";

bookmarkButton.style.position = "absolute";
bookmarkButton.style.display = "none";
bookmarkButton.style.zIndex = "9999";
bookmarkButton.style.padding = "8px 12px";
bookmarkButton.style.background = "black";
bookmarkButton.style.color = "gold";
bookmarkButton.style.border = "1px solid gold";
bookmarkButton.style.borderRadius = "8px";
bookmarkButton.style.cursor = "pointer";

document.body.appendChild(bookmarkButton);

let selectedText = "";

// po označení textu zobrazí tlačítko
document.addEventListener("mouseup", (e) => {

    const selection = window.getSelection().toString().trim();

    if (selection.length > 0) {

        selectedText = selection;

        bookmarkButton.style.left = `${e.pageX + 10}px`;
        bookmarkButton.style.top = `${e.pageY + 10}px`;
        bookmarkButton.style.display = "block";

    } else {
        bookmarkButton.style.display = "none";
    }
});

// kliknutí na tlačítko uloží bookmark
bookmarkButton.addEventListener("click", () => {

    localStorage.setItem(storageKey, selectedText);

    bookmarkButton.style.display = "none";

    alert("📖 Místo bylo zapamatováno");
});

// po načtení stránky najde text
window.addEventListener("load", () => {

    const savedText = localStorage.getItem(storageKey);

    if (!savedText) return;

    const bodyText = document.body.innerHTML;

    if (bodyText.includes(savedText)) {

        const regex = new RegExp(savedText, "g");

        document.body.innerHTML = document.body.innerHTML.replace(
            regex,
            `<span id="savedBookmark" style="background: rgba(255,215,0,0.25);">${savedText}</span>`
        );

        const target = document.getElementById("savedBookmark");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }
});
