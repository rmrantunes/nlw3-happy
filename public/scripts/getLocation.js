// const userIP = getIP();
// console.log(userIP);

// function getIP() {
//   return document.querySelector("#user-ip").dataset.ip;
// }
// navigator.geolocation.getCurrentPosition(getLocation);
// function getLocation(position) {
//   document.querySelector("span[data-maplat]").dataset.maplat =
//     position.coords.latitude;
//   document.querySelector("span[data-maplng]").dataset.maplng =
//     position.coords.longitude;
// }

const mapSpan = document.querySelector("[data-js='map']");
const data = [];
fetch("http://ip-api.com/json/177.203.188.177?lang=pt-BR")
  .then(function (response) {
    response.json().then(({ regionName, city, lat, lon }) => {
      data.push(lat, lon, city, regionName);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
// const coords = getLocation();
