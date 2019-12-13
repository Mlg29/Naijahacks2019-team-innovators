const mongoose = require('mongoose')

/**
 * Vehicle schema
 */
const vehicleSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    manufacturer: {
        type: String,
        required: true,
        trim: true
    },
    plateNo: {
        type: String,
        required: true,
        trim: true
    },
    dispatcherID: {
        type: String,
        required: true,
        trim: true
    },
    
},{ timestamps: true })


const vehicle = mongoose.model('vehicle', vehicleSchema)

module.exports = vehicle;
