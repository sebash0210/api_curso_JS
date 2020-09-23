const express = require('express')
const cors  = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended :false}))
app.use(cors())
const port = 3001


// Mongo connection
require('./connection/connectionDb')


// Routes
const experencesRoutes = require('./routes/experiences')
// Routes
const bookingRoutes = require('./routes/booking')

app.use('/experiences',experencesRoutes)
/* Sample endpoint
    - localhost:3001/experiences/
    - localhost:3001/experiences/getTop5
    - localhost:3001/experiences/getDetail/:id
*/
app.use('/booking',bookingRoutes)

app.listen(port, ()=>{
    console.log(`Se ha iniciado el servidor en el puerto: ${port}`)
})
