const BookingModel = require('../models/bookingModel')

const regBooking = async ( booking ) =>{
    try {
        const regbooking = await BookingModel(booking).save()
        return {status_message: "Create booking Success"} 
    } catch (error) {
        throw error 
    } 
}

module.exports = regBooking
