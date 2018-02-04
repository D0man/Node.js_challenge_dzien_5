const express = require('express');
const app = express();

let nameList = [];
let name;
app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    nameList.push(req.params.imie);
    res.send('zapisano imie ');
});
app.get('/name/show', (req, res) => { 
    res.send('Twoje imie to ' + name);
});
app.get('/name/check', (req, res) => { 
    nameList.includes(name)?res.send("To imie zostało juz zapisane") :
    res.send("imie nie zostało zapisane");
});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
