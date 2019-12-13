const mongoose = require('mongoose')

/**
 * Waste schema
 */
const wasteSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    userID: {
        type: String,
        required: true,
        trim: true
    },
    dispatcherID: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    
},{ timestamps: true })


const Waste = mongoose.model('Waste', wasteSchema)

module.exports = Waste;
