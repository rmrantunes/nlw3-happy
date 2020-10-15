const path = require("path"); // para na concatenação do sendFile com o caminho correto
const express = require("express"); // require faz a requisição das dependencias instaladas pelo package manager
// nesse caso o express é uma variável
const server = express(); // o retorno da função é um objeto, com get, listen, post

// criar uma rota
// "/" = index.html
server
  .use(express.static("public")) // faz com que as pasta estatica "public" funcione
  // configurar template engine Handlebars.js
  // todos os arquivos que forem .html devem ser trocados por .hbs
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  .get("/", (req, res) => {
    // return res.sendFile(path.join(__dirname, "views", "index.html")); // A resposta é enviada para o cliente (ela vai dentro de res.sendFile(aqui))
    // Com a template engine isso aqui ^^^ é feito assim:
    return res.render("index");
  });

// ligar o servidor
server.listen(5500);
