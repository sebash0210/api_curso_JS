const {
        findExperiences,
        findTop5Experiences,
        findAllExperiences
      } =  require('./../businessLogic/experiencesBL')

const getAll = async (req,res) =>{
    try {
        const response = await findAllExperiences()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
   
}

const getTop5 = async (req,res) =>{
    try {
        const response =await findTop5Experiences()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }


}

const getDetail = async (req,res) =>{
    
    const { id } = req.params
    try{
        const response = await findExperiences(id)
        res.json(response)
    }catch(error){
        res.status(error.status).send(error.msg)
    }

}

module.exports = {
    getAll,
    getTop5,
    getDetail
}
