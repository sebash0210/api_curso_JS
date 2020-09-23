const EXPERENCES = require('../repository/experiencesRepository')


const findAllExperiences = () => {
    return { experiences: EXPERENCES }
}

const findTop5Experiences = () =>{
    const experienceSorted = EXPERENCES.sort((a,b) =>{
        if(a.score < b.score) return 1
        if(a.score > b.score) return -1
        return 0
    })
    const top5Experience = experienceSorted.slice(0,5)
    return {top: top5Experience}
}

const findExperiences = (id) =>{
    const experience = EXPERENCES.find(el => el.id === Number(id))
    if(experience===undefined) throw('not Found!')
    return {experience} // return {experence: experence}
}

module.exports = {
    findExperiences,
    findTop5Experiences,
    findAllExperiences
}