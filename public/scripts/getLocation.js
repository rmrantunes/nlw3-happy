import pageOrphanage from "./page-orphanages.js";

async function getIP() {
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

function renderCityAndState({ regionName, city, lat, lon }) {
  const mapState = document.querySelector('[data-map="state"]');
  const mapCity = document.querySelector('[data-map="city"]');

  mapState.innerText = regionName;
  mapCity.innerText = city;
  pageOrphanage(lat, lon);
}

getIP();
