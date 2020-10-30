import pageOrphanage from "./page-orphanages.js";

const mapState = document.querySelector('[data-map="state"]');
const mapCity = document.querySelector('[data-map="city"]');

function renderCityAndState({ regionName, city, lat, lon }) {
  mapState.innerText = regionName;
  mapCity.innerText = city;
  pageOrphanage(lat, lon);
}

async function getLocationByIP() {
  const userIP = await (
    await fetch("https://api.ipify.org/?format=json")
  ).json();
  getLocation(userIP);
}

async function getLocation({ ip }) {
  const locationResponse = await fetch(
    `http://ip-api.com/json/${ip}?lang=pt-BR`,
  );
  const userLocation = await locationResponse.json();
  renderCityAndState(userLocation);
}

getLocationByIP();

// Search location
const searchLocation = {
  form: document.querySelector('[data-search="form"]'),
  input: document.querySelector('[data-search="input"]'),
  map: document.querySelector("#mapid"),
};
searchLocation.form.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  reverseGeolocation(searchLocation.input.value);
}

async function reverseGeolocation(search) {
  try {
    const reverseData = await (
      await fetch(
        `https://us1.locationiq.com/v1/search.php?key=pk.91202ec0256ea7be1056319fce904a8b&q=${search}&format=json`,
      )
    ).json();
    const cityAndState = reverseData[0].display_name.split(", ");
    const location = {
      regionName: cityAndState[3],
      city: cityAndState[0],
      lat: reverseData[0].lat,
      lon: reverseData[0].lon,
    };
    searchLocation.map.outerHTML = `<div id="mapid" class="animate-appear"></div>`;
    renderCityAndState(location);
  } catch (error) {
    console.log(error);
  }
}
