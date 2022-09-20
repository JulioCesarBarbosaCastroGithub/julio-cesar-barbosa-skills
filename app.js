const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobremim', (req, res) => {
    res.render('sobreMim');
});

app.get('/myskills', (req, res) => {
    res.render('mySkills');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));