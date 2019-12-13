const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/naijaRecycler', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})