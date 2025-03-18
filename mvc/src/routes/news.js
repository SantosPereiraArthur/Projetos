const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar EJS como o motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Pasta onde os arquivos EJS estão

// Função para carregar os dados do arquivo noticia.json
const carregarNoticias = async () => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'noticia.json'), 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Erro ao carregar notícias:", error);
        return [];
    }
};

// Rota para pré-carregar as notícias
app.get('/preload', async (req, res) => {
    const noticias = await carregarNoticias();
    res.json(noticias);
});

// Rota para a página inicial
app.get('/', async (req, res) => {
    const noticias = await carregarNoticias();
    res.render('pg_inicial', { noticias });
});

// Rota para a página de notícia 1
app.get('/noticia1', async (req, res) => {
    const noticias = await carregarNoticias();
    res.render('pg_noticia', { noticia: noticias[0] }); // Pegando a primeira notícia
});

// Rota para a página de notícia 2
app.get('/noticia2', async (req, res) => {
    const noticias = await carregarNoticias();
    res.render('pg_noticia2', { noticia: noticias[1] }); // Pegando a segunda notícia
});

// Rota para a página de notícia 3
app.get('/noticia3', async (req, res) => {
    const noticias = await carregarNoticias();
    res.render('pg_noticia3', { noticia: noticias[2] }); // Pegando a terceira notícia
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
