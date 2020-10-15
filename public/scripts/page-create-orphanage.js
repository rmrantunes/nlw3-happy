// Create map
const map = L.map("mapid").setView([-27.2269864, -49.6468318], 15);

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

// quase da mesma forma que o addEventListener que tem o event com aquelas propriedades do browser;
// esse on() tem as propriedades do mapa no seu event.

// adicionar campo de fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //duplicar o newUpload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone
  const newFieldContainer = fieldsContainer[--fieldsContainer.length].cloneNode(
    true,
  );
  // verificar se o valor estar vazio
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  } // Basicante ele quebra a função
  //limpar valor
  newFieldContainer.children[0].value = "";
  //adicionar o clone no container de imagens
  container.appendChild(newFieldContainer);
}

function removePhoto(event) {
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length != 1) {
    event.currentTarget.parentElement.remove();
  } else {
    event.currentTarget.parentElement.children[0].value = "";
  }
}

// select sim e não
function toggleSelect(event) {
  // retirar a classe active
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //adicionar a classe active
  const button = event.currentTarget;
  button.classList.add("active");
  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector("[name='open_on_weekends']");
  console.log(input);
  // verificar se é sim ou não
  input.value = button.dataset.value; // data-value attribute
}
