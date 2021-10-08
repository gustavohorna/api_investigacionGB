const express = require('express'); //sintaxis para importar modulos en nodejs
require('dotenv').config();

const { dbConection } = require('./config/database')
    //crear el servidor
const cors = require('cors');


const app = express();

//cors
app.use(cors());

app.use(express.json());


//creando ka conexio a la bd

dbConection();
//creando rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));
//app.use('/api/usuarios', require('./routes/investigadores.route'));
app.use('/api/login', require('./routes/auth.routes'));



//codigo para desplegar
app.listen(process.env.PORT, () => {
        console.log('servidor desplegado en el puerto: ' + process.env.PORT)
    })
    //adimnproject
    //XigtAc9IR5fb27FB