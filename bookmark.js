const storageKey = "text-bookmark-" + window.location.pathname;

// vytvoření tlačítka
const bookmarkButton = document.createElement("button");
bookmarkButton.innerText = "📖 Zapamatovat místo";

// styl tlačítka
bookmarkButton.style.position = "absolute";
bookmarkButton.style.display = "none";
bookmarkButton.style.zIndex = "9999";
bookmarkButton.style.padding = "8px 12px";
bookmarkButton.style.background = "black";
bookmarkButton.style.color = "gold";
bookmarkButton.style.border = "1px solid gold";
bookmarkButton.style.borderRadius = "8px";
bookmarkButton.style.cursor = "pointer";
bookmarkButton.style.fontSize = "14px";

document.body.appendChild(bookmarkButton);

let selectedText = "";

// zobrazí tlačítko po označení textu
document.addEventListener("mouseup", (e) => {

    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text.length > 0) {

        selectedText = text;

        bookmarkButton.style.left = `${e.pageX + 10}px`;
        bookmarkButton.style.top = `${e.pageY + 10}px`;
        bookmarkButton.style.display = "block";

    } else {

        bookmarkButton.style.display = "none";
    }
});

// uloží bookmark
bookmarkButton.addEventListener("click", () => {

    localStorage.setItem(storageKey, selectedText);

    bookmarkButton.style.display = "none";

    alert("📖 Místo bylo zapamatováno");
});

// po načtení obnoví bookmark
window.addEventListener("load", () => {

    const savedText = localStorage.getItem(storageKey);

    if (!savedText) return;

    // hledání textových uzlů
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {

        if (node.nodeValue.includes(savedText)) {

            const span = document.createElement("span");

            const highlightedText = node.nodeValue.replace(
                savedText,
                `|||BOOKMARK_START|||${savedText}|||BOOKMARK_END|||`
            );

            const wrapper = document.createElement("div");
            wrapper.innerHTML = highlightedText
                .replace(
                    "|||BOOKMARK_START|||",
                    `<span id="savedBookmark" style="background: rgba(255,215,0,0.25);">`
                )
                .replace(
                    "|||BOOKMARK_END|||",
                    `</span>`
                );

            while (wrapper.firstChild) {
                node.parentNode.insertBefore(wrapper.firstChild, node);
            }

            node.parentNode.removeChild(node);

            const target = document.getElementById("savedBookmark");

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            break;
        }
    }
});

// blokování kopírování
document.addEventListener("copy", (e) => {
    e.preventDefault();
    alert("Kopírování textu není povoleno.");
});

// blokování CTRL+C
document.addEventListener("keydown", (e) => {

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
        e.preventDefault();
    }
});

// blokování pravého kliknutí
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
