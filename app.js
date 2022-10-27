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

app.get('/skills', (req, res) => {
    res.render('skills');
});

app.get('/skills/web', (req,res) => {
    res.render('web');
});

app.get('/skills/terminal', (req,res) => {
    res.render('terminal');
});

app.get('/skills/git', (req,res) => {
    res.render('git');
});

app.get('/skills/github', (req,res) => {
    res.render('github');
});

app.get('/skills/metodologiasageis', (req,res) => {
    res.render('metodologiasAgeis');
});

app.get('/skills/html', (req,res) => {
    res.render('html');
});

app.get('/skills/css', (req,res) => {
    res.render('css');
});

app.get('/skills/javascript', (req,res) => {
    res.render('javaScript');
});

app.get('/skills/nodejs', (req,res) => {
    res.render('nodeJs');
});

app.get('/skills/sqlmysql', (req,res) => {
    res.render('sqlMysql');
});

app.get('/skills/api', (req,res) => {
    res.render('api');
});

app.get('/skills/reactjs', (req,res) => {
    res.render('react');
});

app.get('/skills/angularjs', (req, res) => {
    res.render('angularJs');
});

app.get('/skills/java', (req, res) => {
    res.render('java');
});

app.get('/skills/typescript', (req, res) => {
    res.render('typeScript');
});

app.get('/projetos', (req, res) => {
    res.render('projetos');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'));