const mongoose = require('mongoose')
const {Schema} = mongoose

const ExperiencesSchema =  new Schema({ 
    image: String,
    title:  String,
    description: String, 
    place: String, 
    score: Number,
    users: Number 
})

const ExperienceModel = mongoose.model('experiences', ExperiencesSchema)

module.exports = ExperienceModel