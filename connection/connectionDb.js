const mongoose = require('mongoose')

const url ='mongodb+srv://db_airbnbapp:Sh021090@cluster0.vr57b.mongodb.net/db_cloneairbnb?authSource=admin&replicaSet=atlas-90070i-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true'
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology:true})

const db = mongoose.connection

db.on('error', () => console.error('Error connecting dataBase'))
db.once('open',() => console.log('Connection with mongo success'))


module.exports = db