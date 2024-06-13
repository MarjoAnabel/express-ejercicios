const exprees = require('express')
const app = exprees()
const PORT = 3000
app.use(exprees.json())

app.listen(PORT, ()=> {
    console.log (`Servidor levantado en el puerto ${PORT}`)
})

//Array
const products = {
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300 },
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000 },
      { id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100 },
      { id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200 },
      { id: 5,  nombre: 'Skin Valorant' , precio: 120 },
      { id: 6, nombre: 'Taza de Star Wars' , precio: 220 }
    ]
  }


//GET, para montrar el array en postman
app.get('/products', (req, res) => {
	res.status(200).send(products)
})

const productsItem = products.items;
//Crear endpoint para poder crear un producto nuevo
app.post('/newProduct', (req, res) => {
	const newProduct = {
		id: productsItem.length + 1,
		nombre: req.body.nombre,
    	precio: req.body.precio
	
	}
	if (req.body.nombre === '' || req.body.precio === '') {
		res.status(400).send({ message:'Rellena los campos requeridos' })
	} else {
		productsItem.push(newProduct)
		res.status(201).send({ message:'todo okey', products })
	}
})

//Crear endpoint para poder actualizar un producto
app.put ('/updateProducts/id/:id', (req,res) =>{
  const found = productsItem.some((item) => item.id === +req.params.id)
  if(found){
		productsItem.forEach(item => {
			if (item.id == req.params.id) {
				item.nombre = req.body.nombre || item.nombre
				item.precio = req.body.precio || item.email
        res.status(200).send(item)
      }
		})
		
	} else {
		res.start(400).send({ message: 'error' })
	}
})

//Crear endpoint para poder eliminar un producto
app.delete('/deleteProducts/id/:id', (req, res) => {
	const result = productsItem.filter(item => item.id !== +req.params.id) //El + es para convertir a numero la peticion de id
	res.status(200).send(result)
})


//Crear filtro por precio de producto
app.get ('/paramPrecio/precio/:precio', (req,res)=> {
	const paramPrecio = productsItem.find(item => item.precio === +req.params.precio)
	if (paramPrecio) {
		res.status(200).send({ message:'Precio solicitado', item: paramPrecio  })
	} else {
		res.status(404).send({ message:'No se encontro ese precio o no existe' })
	}
})


//Crear filtro que muestre los productos con un precio entre 50 y 250.
app.get ('/paramPrecioMinMax/precio/:preciomin + :preciomax', (req,res)=> {

	const paramPrecioMinMax = productsItem.find(item => item.precio === +req.params.id)
	if (paramid) {
		res.status(200).send({ message:'Producto solicitado', item: paramPrecioMinMax  })
	} else {
		res.status(404).send({ message:'Error no se encontro ese Id o no existe ' })
	}
})



//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto

app.get ('/paramId/id/:id', (req,res)=> {
	const paramid = productsItem.find(item => item.id === +req.params.id)
	if (paramid) {
		res.status(200).send({ message:'Producto solicitado', item: paramid  })
	} else {
		res.status(404).send({ message:'Error no se encontro ese Id o no existe ' })
	}
})

//Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
app.get ('/paramName/nombre/:nombre', (req,res)=> {
	const paramName = productsItem.find(item => item.nombre === req.params.nombre)
	if (paramName) {
		res.status(200).send({ message:'Nombre solicitado', item: paramName  })
	} else {
		res.status(404).send({ message:'Error no se econtro el nombre o no existe' })
	}
})