// Options
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// Create map
const map = L.map("mapid", options).setView([-27.2269864, -49.6468318], 15);

// Create title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker
L.marker([-27.2269864, -49.6468318], { icon }).addTo(map);

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
