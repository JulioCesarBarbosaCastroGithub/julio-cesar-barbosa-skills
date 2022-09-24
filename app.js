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

app.get('/myskills/web', (req,res) => {
    res.render('web');
});

app.get('/myskills/terminal', (req,res) => {
    res.render('terminal');
});

app.get('/myskills/git', (req,res) => {
    res.render('git');
});

app.get('/myskills/github', (req,res) => {
    res.render('github');
});

app.get('/myskills/metodologiasageis', (req,res) => {
    res.render('metodologiasAgeis');
});

app.get('/myskills/html', (req,res) => {
    res.render('html');
});

app.get('/myskills/css', (req,res) => {
    res.render('css');
});

app.get('/myskills/javascript', (req,res) => {
    res.render('javaScript');
});

app.get('/myskills/nodejs', (req,res) => {
    res.render('nodeJs');
});

app.get('/myskills/sqlmysql', (req,res) => {
    res.render('sqlMysql');
});

app.get('/myskills/api', (req,res) => {
    res.render('api');
});

app.get('/myskills/react', (req,res) => {
    res.render('react');
});

app.get('/myskills/angularjs', (req, res) => {
    res.render('angularJs');
});

app.get('/myskills/java', (req, res) => {
    res.render('java');
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