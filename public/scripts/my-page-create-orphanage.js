// Create map
const map = L.map("mapid").setView([-10.8860622, -61.9358017], 15);

// Create title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// create and add marker
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // colocar os dados nos inputs
  document.querySelector('[name="lat"]').value = lat;
  document.querySelector('[name="lng"]').value = lng;

  // remover icon
  marker && map.removeLayer(marker); // condição && execução (if true)

  // add icon tile
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

function addPhotoField() {
  // Seleção dos inputs
  const inputs = Array.from(document.querySelectorAll(".new-upload input"));

  // Trocando a cor da borda se for vazio, como erro
  inputs.forEach((item) => (item.style.borderColor = "#a1e9c5"));
  inputs
    .filter((item) => item.value == "")
    .forEach((item) => (item.style.borderColor = "#FF669D"));

  // Verificando se todos estão preenchidos
  // Para então ser executado o clone
  const isNotEmpty = inputs.every((item) => item.value !== "");
  if (isNotEmpty) {
    const fieldContainer = document.querySelector(".new-upload");
    const newFieldContainer = fieldContainer.cloneNode(true);
    newFieldContainer.querySelector("input").value = "";
    document.querySelector("#images").appendChild(newFieldContainer);
  }
}

function removePhoto(event) {
  const fieldsContainer = document.querySelectorAll(".new-upload");
  fieldsContainer.length != 1
    ? event.currentTarget.parentElement.remove()
    : (event.currentTarget.parentElement.children[0].value = "");
}
