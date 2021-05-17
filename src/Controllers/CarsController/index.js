const Cars = require('../../Models/Cars')

const CarsController = {
    async createCar(req,res){
        const bodyData = req.body
        const { user_id } = req.params
        try{
            const data = {username: user_id, ...bodyData}
            const newCar = await Cars.create(data)
            return res.status(200).send(newCar)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    async getUserCars(req,res){
        const { user_id } = req.params
        try{
            const carOfAnUser = await Cars.find({username: user_id})
            return res.status(200).send(carOfAnUser)
            
        }catch(err){
            return res.status(400).json(err)
        }
    },
    async updateCars(req,res){
        const bodyData = req.body
        const { car_id,user_id } = req.params
        try{
            const updatedCar = await Cars.findByIdAndUpdate(car_id, bodyData, { new: true })
            return res.status(200).send(updatedCar)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    async deleteCars(req,res){
        const { car_id,user_id  } = req.params
        try{
         const deleteCar = await Cars.findByIdAndDelete(car_id) 
         return res.status(200).send(deleteCar)
        }catch(err){
            return res.status(400).json(err)
        }
    },

    async getCars(req,res){
        try{
            const getCars = await Cars.find()
            return res.status(200).send(getCars)
        }catch(err){
            return res.status(400).json(err)
        }
    },

    async getCarById(req,res){
        try{
            
        }catch(err){
            return res.status(400).json(err)
        }
    }

}
module.exports = CarsController