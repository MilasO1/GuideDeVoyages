// Fichier : assets/js/main.js

// Récupérer les éléments du carousel et les boutons
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

// Affiche un groupe de 4 images
function showSlides(index) {
  slides.forEach((slide, i) => {
    slide.classList.add('hidden'); // Cacher toutes les images
    if (i >= index && i < index + 4) {
      slide.classList.remove('hidden'); // Montrer seulement les 4 images
    }
  });
}

// Gestion des boutons
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlides(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlides(currentIndex);
});

// Afficher les 4 premières images au chargement
showSlides(currentIndex);
