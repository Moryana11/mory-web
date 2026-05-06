/* ZÁKAZ PRAVÉHO TLAČÍTKA */

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

/* BLOKACE KLÁVES */

document.addEventListener("keydown", function(e) {

    /* CTRL kombinace */

    if (
        e.ctrlKey &&
        (
            e.key === "c" ||
            e.key === "u" ||
            e.key === "s" ||
            e.key === "a"
        )
    ) {
        e.preventDefault();
    }

    /* F12 */

    if (e.key === "F12") {
        e.preventDefault();
    }

});
