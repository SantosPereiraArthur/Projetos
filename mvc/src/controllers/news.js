//exporta a função index, deixando disponível para ser usada em outras partes do projeto
module.exports.index = function (application, req, res) {
  //cria uma ionstância de módulo news que será usado para acessar os dados da notícia
  var newsModel = new application.src.models.news();

  //chama o método getlastnews do modelo news model para buscar as últimas notícias, esse próximo método recebe a funçãode callback que será executada após a consulta ser concluída

  newsModel.getLastNews(function (err, result) {
    //se a consulta der certo, o result terá as notícias recuperadas do ''Banco de dados'', o método res.render é utilizado para rendenrizar a views - news/index e passa as notícias obtidas nos results para a view, onde será exibita para o usuário
    res.render("news/index", { news: result });
  });
};
function x(){
/*
text-noticia
text-titulo

primeiranoticia
segundanoticia
terceiranoticia

//Pegar as informações do titulo e noticia e armazenar no json.
let titulo = document.getElementById('text-titulo').value;
let noticia = document.getElementById('text-noticia').value;

if (titulo == " " && noticia == " "){
  alert("Deu merda papai");
}else{
  alert("Tudo Certo papai");
  let dados = {
    titulo : 'titulo',
    noticia : 'noticia'
  };
  localStorage.setItem('noticias', JSON.stringify(dados));

};*/
let pn = localStorage.getItem('data');
let sn = localStorage.getItem('data');
let tn = localStorage.getItem('data');
};