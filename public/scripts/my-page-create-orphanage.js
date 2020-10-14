// Create map
const map = L.map("mapid").setView([-27.2269864, -49.6468318], 15);

// Create title layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
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

// quase da mesma forma que o addEventListener que tem o event com aquelas propriedades do browser;
// esse on() tem as propriedades do mapa no seu event.

// adicionar campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  const inputs = Array.from(document.querySelectorAll(".new-upload input"));
  const isNotEmpty = inputs.every((item) => item.value !== "");
  inputs.forEach((item) => (item.style.borderColor = "#a1e9c5"));
  inputs
    .filter((item) => item.value == "")
    .forEach((item) => (item.style.borderColor = "#FF669D"));
  if (isNotEmpty) {
    //duplicar o newUpload
    const fieldContainer = document.querySelector(".new-upload");
    // realizar o clone
    const newFieldContainer = fieldContainer.cloneNode(true);
    //limpar valor
    newFieldContainer.querySelector("input").value = "";
    //adicionar o clone no container de imagens
    container.appendChild(newFieldContainer);
  }
}

function removePhoto(event) {
  const fieldsContainer = document.querySelectorAll(".new-upload");
  fieldsContainer.length != 1
    ? event.currentTarget.parentElement.remove()
    : (event.currentTarget.parentElement.children[0].value = "");
}
