const { Router } = require('express')

const userController = require('../Controllers/UserController')
const LoginController = require('../Controllers/Login')
const CarsController = require('../Controllers/CarsController')

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Olá Mundo');
})

routes.post('/users', userController.createUser)
routes.get('/users', userController.getUsers)

routes.get('/users/:user_id', userController.getUsersbyId)

routes.post('/login', LoginController.createSession )

routes.post('/cars/:user_id', CarsController.createCar)
routes.get('/cars/:user_id', CarsController.getUserCars)

routes.get('/cars/:car_id', CarsController.getCarById)
routes.delete('/cars/:user_id/:car_id', CarsController.deleteCars)
routes.patch('/cars/:user_id/:car_id', CarsController.updateCars)

routes.get('/cars',CarsController.getCars)

module.exports = routes;