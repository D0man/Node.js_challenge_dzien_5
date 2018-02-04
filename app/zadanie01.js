//Twój kod
const express = require('express');
const app = express();


app.get('/suma/:x/:y', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const x = req.params.x;
    const y = req.params.y;
    const result= Number(x)+Number(y);
    res.send('Suma ' + result);
});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
