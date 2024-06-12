const exprees = require('express')
const app = exprees()
const PORT = 3000
app.use(exprees.json())

app.listen(PORT, ()=> {
    console.log (`Servidor levantado en el puerto ${PORT}`) 
})


//Productos
    //Metodo Get - Raiz del sitio "/" monstrar mensaje
app.get ('/', (req,res) => {
    res.send('Sean cordialmente bienvenidos')
})

    //la raiz nombre productos
app.get('/productos', (req,res) => {
    res.send('Listado de productos')
})

    //Metodo Post
app.post('/productos', (req,res) => {
    res.send('Crear un producto')
})

    //Metodo put
app.put('/productos', (rep,res) =>{
    res.send('Actualizar un producto')
})

    //Metodo Delete
app.delete('/productos', (rep,res)=>{
    res.send('Borrar un producto')
})

//Usuarios
    //Metodo Get
app.get('/usuarios', (rep,res) =>{
    res.send('Listado de usuarios')
})

    //Metodo post
app.post('/usuarios', (rep,res) =>{
    res.send('Crear un usuario')
})

    //Metodo put
app.put('/usuarios',(req,res)=>{
    res.send('Actualicar un usuario')
})

    //Metodo delete
app.delete('/usuarios', (req,res) =>{
    res.send('Borrar un usuario')
})