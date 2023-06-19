/* const app = require('express')(); */
const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('./public'));

//senFile OPSİYONU ile index.html üzerinden yaparken *** O DA PUBLİC YAPILABİLİR
app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, './index2.html'));             //response olarak gelen sayfa index2.html
});

app.get('/about', (req, res) => {         //http://localhost:5555/about
        res.status(200).send("about page");
});

app.all('*', (req, res) => {
        res.status(404).send("<h1 >UPSS NOT FOUND</h1>");
});

app.listen(5555, () => { console.log("PORT 5555 startet to run") });