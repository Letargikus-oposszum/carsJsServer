import express from 'express'
import carsRoutes from './routes/cars.js'

const app = express()
app.use(express.json())
app.use('/cars',carsRoutes)

app.listen(3000,()=>{
    console.log('The server is running!')
})