const regBooking =  require('./../businessLogic/bookingBL')

const booking = async (req,res) =>{
    const {body}  = req
    try{
        const response = await regBooking(body)
        res.json(response)
    }catch(error){
        res.status(500).send(error)
    }

}



module.exports = booking   
