const exprees = require('express') //Importando express
const app = exprees() //Inicio de express
const PORT = 3000

//Decimos en que puerto levantamos el servidor
app.listen(PORT, () => {
    console.log (`Servidor levantado en el puerto ${PORT}`) 
    })