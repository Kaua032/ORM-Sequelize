const express = require('express');

const PORT = 3000;

require('./database/index')

const app = express();

const routes = require('./routes.js');

app.use(express.json());
app.use('/user', routes);

app.listen(PORT, ()=>{
    console.log(`SERVER ON 🟢 ${PORT}`)
});