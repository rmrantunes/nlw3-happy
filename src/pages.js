// Este arquivo ficará responsável por conter as informações das páginas
// que setá enviada pelo res.render()
// principalmente por causa da template engine

// importar dados do banco fakedata
const orphanages = require("./database/fakedata.js");

// exportar para o server.js
module.exports = {
  index(req, res) {
    return res.render("index");
  },
  orphanage(req, res) {
    return res.render("orphanage");
  },
  orphanages(req, res) {
    return res.render("orphanages", { orphanages });
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
};
