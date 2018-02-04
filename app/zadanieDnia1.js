const express = require('express');
const app = express();


app.use(express.static('./public/zadanieDnia/'));
let result = {};
app.get('/vote/:option', (req, res) => {
    result.hasOwnProperty(req.params.option) ? 
    result[req.params.option]++ : result[req.params.option] = 1;
    res.send(`Dziękujemy za oddanie głosu!`);
});
app.get('/votes/check', (req, res) => {
    let output='Liczba głosów na:';
    for (const prop in result) {
        output += prop + '=' + result[prop];
      }
    res.send(output);
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
