// =========================================================
// VoyageAventure - Scripts partagés
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    // Année courante dans le footer
    document.querySelectorAll(".current-year").forEach((el) => {
        el.textContent = new Date().getFullYear();
    });

    // ---------- Filtre des destinations ----------
    const filterButtons = document.querySelectorAll("[data-filter]");
    const destinations = document.querySelectorAll("[data-continent]");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((b) => b.classList.remove("active"));
            button.classList.add("active");

            destinations.forEach((card) => {
                const visible = filter === "tous" || card.dataset.continent === filter;
                card.classList.toggle("d-none", !visible);
            });
        });
    });

    // ---------- Modale "Voir détails" ----------
    const detailsModal = document.getElementById("detailsModal");
    if (detailsModal) {
        detailsModal.addEventListener("show.bs.modal", (event) => {
            const card = event.relatedTarget.closest(".card");
            detailsModal.querySelector(".modal-title").textContent =
                card.querySelector(".card-title").textContent;
            detailsModal.querySelector(".modal-icon").textContent =
                card.querySelector(".destination-image").textContent;
            detailsModal.querySelector(".modal-description").textContent =
                card.querySelector(".card-text").textContent;
            detailsModal.querySelector(".modal-duration").textContent =
                card.querySelector(".duration").textContent;
            detailsModal.querySelector(".modal-price").textContent =
                card.querySelector(".price").textContent;
        });
    }

    // ---------- Validation du formulaire de contact ----------
    const form = document.querySelector(".needs-validation");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (form.checkValidity()) {
                document.getElementById("form-success").classList.remove("d-none");
                form.reset();
                form.classList.remove("was-validated");
                return;
            }
            form.classList.add("was-validated");
        });
    }
});
