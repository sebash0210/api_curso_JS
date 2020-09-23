var routerb = require('express').Router()
const booking  = require('./../controllers/bookingController')

routerb.post('/', booking)

module.exports= routerb