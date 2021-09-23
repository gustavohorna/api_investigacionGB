const express = require('express'); //sintaxis para importar modulos en nodejs
require('dotenv').config();

const { dbConection } = require('./config/database')
    //crear el servidor
const cors = require('cors');


const app = express();

//cors
app.use(cors());




//creando ka conexio a la bd

dbConection();
//creando rutas

app.get('/', (req, res) => {
    res.status.json({
        ok: true,
        msg: 'biennvenidos a la app proyectos'
    });
});

//codigo para desplegar
app.listen(process.env.PORT, () => {
        console.log('servidor desplegado en el puerto: ' + 3000)
    })
    //adimnproject
    //XigtAc9IR5fb27FB