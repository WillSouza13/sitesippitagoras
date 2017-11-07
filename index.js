const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/teste', function(req, res) {
	let json = JSON.parse(fs.readFileSync('Teste.json'));
	json.push(req.body);
	
	fs.writeFileSync('Teste.json', JSON.stringify(json));
	
	res.status(200)
		.send('SALVO COM SUCESSO!!!');
});

app.post('/api/login', function(req, res) {
	let json = JSON.parse(fs.readFileSync('Login.json'));
	json.push(req.body);
	
	for (var i = 0; i < json.length; ++	i) {
		var Usuario = json[i];
		if (Usuario.cpf === req.body.cpf && Usuario.senha === req.body.senha) {
			if(Usuario.cpf == "Admin" && Usuario.senha == "Admin") 
			{
				res.sendFile('/temp/PORTAL PALESTRAS SIP/VIEW/FORMS/GESTAO.html');
				return;
			}
			else
			{
				res.sendFile('/temp/PORTAL PALESTRAS SIP/VIEW/FORMS/FORMULARIO_CONSULTA_PALESTRA.html');
				return;
			}
		}
	}

});

app.get('/retorna', function(req, res) {
	let json = JSON.parse(fs.readFileSync('Teste.json'));
	
	res.status(200)
		.json(json);
});

app.post('/api/cadastro', function(req, res) {
	let json = JSON.parse(fs.readFileSync('Login.json'));
	json.push(req.body);
	req.body
	fs.writeFileSync('Login.json', JSON.stringify(json));


	
	res.status(200)
		.send('SALVO COM SUCESSO!!!');

	res.sendFile('/temp/PORTAL PALESTRAS SIP/VIEW/FORMS/GESTAO.html');
});

app.listen(8080, function() {
	console.log('Servidor está funcionando em http://localhost:8080');
});
