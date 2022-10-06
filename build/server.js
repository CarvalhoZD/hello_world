"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/bsm', function (request, response) {
    response.send('-----Mentalidades-----<br><br>- Persistência<br>- Responsabilidade Pessoal<br>- Orientação ao Futuro<br>- Mentalidade de Crescimento<br><br>-----Habilidades-----<br><br>- Trabalho em Equipe<br>- Atenção aos Detalhes<br>- Proatividade<br>- Comunicação');
});
app.get('/objetivos-aprendizagem', function (request, response) {
    response.send('Practice Polimorphism and arrow fuctions while learning SQL so I can put it all together at the end of the week!');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port));
});
