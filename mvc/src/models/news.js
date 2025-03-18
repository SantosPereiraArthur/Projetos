const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON onde as notícias serão armazenadas
const caminhoArquivo = path.join(__dirname, 'news.json');

// Função para ler o arquivo JSON e retornar os dados
function lerNoticias() {
  const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
  return JSON.parse(dados).noticias;
}

// Função para salvar as notícias no arquivo JSON
function salvarNoticias(noticias) {
  const dados = { noticias };
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2));
}

// Função para adicionar uma nova notícia
function addNoticia(titulo, noticia) {
  const noticias = lerNoticias();

  // Gerar um ID automático (baseado no tamanho atual das notícias)
  const novoId = noticias.length > 0 ? noticias[noticias.length - 1].id + 1 : 1;

  // Criar a nova notícia
  const novaNoticia = {
    id: novoId,
    titulo: titulo,
    noticia: noticia,
  };

  // Adicionar a nova notícia ao array de notícias
  noticias.push(novaNoticia);

  // Salvar novamente as notícias no arquivo JSON
  salvarNoticias(noticias);

  console.log('Notícia adicionada:', novaNoticia);
}

