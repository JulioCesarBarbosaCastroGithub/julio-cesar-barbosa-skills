const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobremim', (req, res) => {
    res.render('sobreMim');
});

app.get('/myskills', (req, res) => {
    res.render('mySkills');
});

app.get('/myskills/javascript', (req,res) => {
    res.render('javaScript');
});

app.get('/projetos', (req, res) => {
    res.render('projetos');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.post('/formularioenviado', (req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var cidade = req.body.cidade;
    var texto = req.body.texto;
    res.send("Informações enviadas com sucesso! Obrigado por interagir! ✌️");
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));