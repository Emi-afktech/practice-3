const express = require("express");
const hotelrutas = require('./src/hotelbackend/routes')
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/v1/hoteles', hotelrutas);

app.listen(port, () => console.log(`El server esta en el puerto:${port}`));
