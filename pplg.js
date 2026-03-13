const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelectorAll(".nav ul a");
const yearEl = document.getElementById("year");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}



/* HILANGKAN LOADING SAAT HALAMAN SELESAI DIMUAT */
window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
});


