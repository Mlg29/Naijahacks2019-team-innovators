const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/naija', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
