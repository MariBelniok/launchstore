const express = require('express')
const routes = express.Router()
const multer = require('./app/middlewares/multer')
const productController = require('./app/controllers/productController')
const homeController = require('./app/controllers/homeController')
const searchController = require('./app/controllers/searchController')

//HOME
routes.get('/', homeController.index)

//SEARCH 
routes.get('/products/search', searchController.index)

// PRODUCTS
routes.get('/products/create', productController.create)
routes.get('/products/:id', productController.show)
routes.get('/products/:id/edit', productController.edit)

routes.post('/products', multer.array("photos", 6), productController.post)
routes.put('/products', multer.array("photos", 6), productController.put)
routes.delete('/products', productController.delete)

//ALIAS
routes.get('/ads/create', (req, res) => {
    return res.redirect('/products/create')
})





module.exports = routes