// Options
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// get values from html
const lat = document.querySelector("[data-lat]").dataset.lat;
const lng = document.querySelector("[data-lng]").dataset.lng;

// Create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// Create title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([lat, lng], { icon }).addTo(map);

// image gallery
function selectImage(event) {
  const button = event.currentTarget;
  // remover todas as classes
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => button.classList.remove("active"));
  // selecionar a imagem clicada;
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  // atualizar a imagem do container
  imageContainer.src = image.src;

  // adicionar a classe .active
  button.classList.add("active");
}
