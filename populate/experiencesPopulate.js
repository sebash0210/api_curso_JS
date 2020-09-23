require('./../connection/connectionDb')
const ExperienceModel = require('./../models/experiencesModel')
const EXPERIENCES_REPOSITORY = require('./../repository/experiencesRepository')

const experiencePopulate = () =>{
     
    EXPERIENCES_REPOSITORY.map(async el =>{
        try {
            await ExperienceModel(el).save()
            console.log('Populate',el)
        } catch (error) {
            console.error('Error', error)
        }
    }) 
      
}

experiencePopulate()