// 🔥 SAYFA YÜKLENDİ
window.addEventListener("load", () => {
    document.body.classList.remove("fade-out");
    document.body.classList.add("page-loaded");
});


// 🔥 LINK TRANSITION (MENÜ HARİÇ FIX)
document.querySelectorAll("a").forEach(link => {

    const url = link.getAttribute("href");

    if (!url || url.startsWith("#")) return;

    // 🔥 MENÜ LINKLERİNE DOKUNMA
    if (link.closest(".nav-links")) return;

    link.addEventListener("click", (e) => {
        e.preventDefault();

        document.body.classList.remove("page-loaded");
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = url;
        }, 600);
    });

});


// 🔥 SCROLL ANIMATION
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".fade-up");

    function revealOnScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();

            if (rect.top < window.innerHeight - 80) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});


// 🔥 HERO ANIMATION
document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".cinematic-item");

    items.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 400);
    });

});


// 🔥 SEARCH (SAFE)
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById('searchInput');
    if (!input) return;

    input.addEventListener('input', function () {

        let searchValue = this.value.toLowerCase().trim();
        let categories = document.querySelectorAll('.category-block');

        categories.forEach(category => {

            let cards = category.querySelectorAll('.product-card');
            let hasVisibleCard = false;

            cards.forEach(card => {

                let productName = card.querySelector('h3').innerText.toLowerCase();

                if (productName.includes(searchValue)) {
                    card.style.display = "block";
                    hasVisibleCard = true;
                } else {
                    card.style.display = "none";
                }

            });

            if (hasVisibleCard || searchValue === "") {
                category.style.display = "block";
            } else {
                category.style.display = "none";
            }

        });

    });

});


document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    // 🔥 MENÜ AÇ / KAPA
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // dış click ile çakışmasın

        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        // overlay bug fix
        document.body.classList.remove("fade-out");
        document.body.classList.add("page-loaded");

        navLinks.classList.add("active");
        menuBtn.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    // 🔥 MENÜ LINK TIKLAYINCA KAPAT
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // 🔥 DIŞARI TIKLAYINCA KAPAT (EN KRİTİK)
    document.addEventListener("click", (e) => {
        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            closeMenu();
        }
    });

});