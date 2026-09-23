// VoyageAventure - scripts communs

// Navbar floue au scroll
const nav = document.querySelector(".site-nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 50));

// Apparition des blocs au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
});
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Filtre des destinations
document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector("[data-filter].active").classList.remove("active");
        button.classList.add("active");
        document.querySelectorAll("[data-continent]").forEach((card) => {
            const show = button.dataset.filter === "tous" || card.dataset.continent === button.dataset.filter;
            card.classList.toggle("d-none", !show);
        });
    });
});

// Modale "Voir détails"
const modal = document.getElementById("detailsModal");
modal?.addEventListener("show.bs.modal", (event) => {
    const card = event.relatedTarget.closest(".card");
    modal.querySelector(".modal-title").textContent = card.querySelector(".card-title").textContent;
    modal.querySelector(".modal-img").src = card.querySelector("img").src;
    modal.querySelector(".modal-body p").textContent = card.querySelector(".card-text").textContent;
});

// Formulaire de contact
const form = document.querySelector(".needs-validation");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        document.getElementById("success").classList.remove("d-none");
        form.reset();
        form.classList.remove("was-validated");
    } else {
        form.classList.add("was-validated");
    }
});
