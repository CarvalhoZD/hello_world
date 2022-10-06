import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello World!')
});

app.get('/bsm', (request, response) => {
    response.send('-----Mentalidades-----<br><br>- Persistência<br>- Responsabilidade Pessoal<br>- Orientação ao Futuro<br>- Mentalidade de Crescimento<br><br>-----Habilidades-----<br><br>- Trabalho em Equipe<br>- Atenção aos Detalhes<br>- Proatividade<br>- Comunicação')
});

app.get('/objetivos-aprendizagem',(request, response) => {
    response.send('Practice Polimorphism and arrow fuctions while learning SQL so I can put it all together at the end of the week!')
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});