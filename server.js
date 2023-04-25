const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World from Chau');
})

app.get('/about', (req, res) => {
    res.send(`I'm Chau`)
})


app.listen(port, () => {
    console.log('First app is running in port 3000');
})