document.addEventListener("DOMContentLoaded", function () {
  const niveauSelect = document.getElementById("niveau");
  const classeSelect = document.getElementById("classe");
  const formulaire = document.getElementById("formulaire-preinscription");
  const confirmation = document.getElementById("message-confirmation");

  const classes = {
    maternelle: [
      "Petite Section",
      "Moyenne Section",
      "Grande Section"
    ],
    primaire: [
      "CP",
      "CE1",
      "CE2",
      "CM1",
      "CM2"
    ]
  };

  // Dynamiser les classes selon le niveau choisi
  niveauSelect.addEventListener("change", function () {
    const niveau = this.value;
    classeSelect.innerHTML = '<option value="">--Choisir une classe--</option>';

    if (classes[niveau]) {
      classes[niveau].forEach(cl => {
        const option = document.createElement("option");
        option.value = cl;
        option.textContent = cl;
        classeSelect.appendChild(option);
      });
    }
  });

  // Gestion du formulaire
  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    const champs = [
      "nom_parent", "nom_eleve", "niveau", "classe", "langue",
      "age", "sexe", "quartier", "contact"
    ];

    for (let id of champs) {
      const val = document.getElementById(id).value.trim();
      if (!val) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }
    }

    confirmation.classList.remove("hidden");
    formulaire.reset();
    // On vide d'abord la liste
classeSelect.innerHTML = "";

// On crée une option par défaut
const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "-- Sélectionner un niveau d'abord --";

// On l'ajoute à la liste
classeSelect.appendChild(defaultOption);
    setTimeout(() => {
      confirmation.classList.add("hidden");
    }, 5000);
  });
});
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}