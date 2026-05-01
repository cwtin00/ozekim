document.addEventListener("click", function(e) {
    let el = e.target;

    while (el && el !== document) {
        if (el.tagName === "A") {
            const url = el.getAttribute("href");

            if (!url || url.startsWith("#") || url.startsWith("javascript") || el.target === "_blank") return;

            e.preventDefault();
            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = url;
            }, 500);

            return;
        }
        el = el.parentNode;
    }
});
