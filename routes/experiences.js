var router = require('express').Router()
const {getAll,getTop5,getDetail} = require('./../controllers/experiencesController')


router.get('/', getAll)
router.get('/getTop5', getTop5)
router.get('/getDetail/:id',getDetail)

module.exports = router