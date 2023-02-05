const body = document.body;
const imgs = [
  "Charente_France.jpeg",
  "Gordes_Provence-France.jpeg",
  "house_France.jpeg",
  "Lac_de_Sainte_Croix_Provence-France.jpeg",
  "Milkyway_Mont_Blanc-France.jpeg",
  "Mont_Saint_Michel_France.jpeg",
  "Paris_France.jpg.webp",
  "Somewhere2_France.jpeg",
  "Verdon_Canyon_Provence-France.jpeg",
  "lavande_France.jpeg",
];

const imgSelected = Math.floor(Math.random() * imgs.length);

body.style.backgroundImage = `url(\"img/${imgs[imgSelected]}\")`;
body.style.backgroundSize = "cover";
