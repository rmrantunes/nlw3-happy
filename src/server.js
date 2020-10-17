const path = require("path"); // para na concatenação do sendFile com o caminho correto
const express = require("express"); // require faz a requisição das dependencias instaladas pelo package manager
const pages = require("./pages");
// nesse caso o express é uma variável
const server = express(); // o retorno da função é um objeto, com get, listen, post

// criar uma rota
// "/" = index.html
server
  // utilisar body do req
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public")) // faz com que as pasta estatica "public" funcione
  // configurar template engine Handlebars.js
  // todos os arquivos que forem .html devem ser trocados por .hbs
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  // return res.sendFile(path.join(__dirname, "views", "index.html")); // A resposta é enviada para o cliente (ela vai dentro de res.sendFile(aqui))
  // Com a template engine isso aqui ^^^ é feito assim: (tá lá no pages.js)
  // criar rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// ligar o servidor
server.listen(5500);
