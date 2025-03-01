document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner toutes les images de la galerie
  const galleryImages = document.querySelectorAll(".gallery-container img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Pour chaque image, ajouter un écouteur de clic pour ouvrir la lightbox
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImg.src = image.src;
      lightbox.classList.add("visible");
    });
  });

  // Fermer la lightbox au clic sur celle-ci (hors l'image)
  lightbox.addEventListener("click", (event) => {
    // On ferme uniquement si on clique sur le fond (et non sur l'image elle-même)
    if (event.target === lightbox) {
      lightbox.classList.remove("visible");
    }
  });

  // Fermer la lightbox en appuyant sur la touche "Escape"
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.classList.remove("visible");
    }
  });
});
