const storageKey = "scroll-" + window.location.pathname;

// ukládání pozice
window.addEventListener("scroll", () => {
    localStorage.setItem(storageKey, window.scrollY);
});

// obnovení pozice
window.addEventListener("load", () => {
    const savedPosition = localStorage.getItem(storageKey);

    if (savedPosition !== null) {
        window.scrollTo({
            top: parseInt(savedPosition),
            behavior: "smooth"
        });
    }
});
