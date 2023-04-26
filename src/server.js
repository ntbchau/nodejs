
import express from 'express';
import configViewEngine from './configs/viewEngine';
const path = require('path');
const app = express();
const port = 3001
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/about', (req, res) => {
    res.send(`I'm Chau`)
})


app.listen(port, () => {
    console.log(`First app is running in port ${port}`);
})   