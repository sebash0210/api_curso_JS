const ExperienceModel = require('../models/experiencesModel')



const findAllExperiences = async () => {
    try {
        const experiences =  await ExperienceModel.find()
        return {experiences}
    } catch (error) {
        throw error
    }

}

const findTop5Experiences =  async () =>{
    try {
        const top5 = await ExperienceModel.find().sort({score:'desc'}).limit(5)
        return {top5}
    } catch (error) {
        throw error 
    }
}

const findExperiences = async (id) =>{
    try {
        const  experience = await ExperienceModel.findById(id)
        if (!experience) throw { status: 404 , msg: 'Experience not Found'}
        return {experience}
    } catch (error) {
        throw{ status: 500 , msg: error}
    }
}

module.exports = {
    findExperiences,
    findTop5Experiences,
    findAllExperiences
}