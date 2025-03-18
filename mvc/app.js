//importa o módulo 'express', que é um framework web para o node.js
var express = require("express");

//Importa o módulo 'consign' que é usado para autoload (autocarregamento) de scripts, facilitando o gerenciamento de rotas, models e controllers
var consign = require("consign");

//criar uma instância do express
var app = express();

//configura a engine de visualização como 'ejs' para rendenrizar arquivos .ejs
app.set("view engine", "ejs");

//define o diretório onde estão localizadoas as views (template EJS)
app.set("views", "./src/views");

//configura o 'consign' para incluir automáticamente as rotas, models e controllers na aplicação
consign()
  .include("src/routes") //inclui as rotas, carregando os arquivos da pasta 'src/routes'
  .then("src/models") //inclui os models, carregando os arquivos da pasta 'src/models'
  .then("src/controllers") //inclui os controllers, carregando os arquivos da pasta 'src/controllers'
  .into(app); //injeta essas indeopendências na instância do express(app)
