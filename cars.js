import express from 'express'
import cars from '../data/cars.js'

const router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).json(cars)
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > cars.length){
        return res.json({message:"Car not found"})
    }
    res.status(200).json(cars[id])
})

router.post('/', (req, res) =>{
    const {brand,model,year} = req.body
    if (!brand||!model||!year){
        return res.status(404).json({message: "Missing data"})
    }
    const newCar = {brand,model,year};
    cars.push(newCar)
    res.status(201).json(newCar)
})

router.put('/:id', (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > cars.length){
        return res.json({message:"Car not found"})
    }
    const {brand,model,year} = req.body
    if (!brand||!model||!year){
        return res.status(404).json({message: "Missing data"})
    }
    res.status(200).json(cars[id])
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    if(id < 0 || id > cars.length){
        return res.json({message:"Car not found"})
    }
    cars.splice(id, 1)
    res.status(200).json({message:"Car has been successfully deleted!"})
})

export default router