const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sirsuccess:blessing@naijarecycler-wjbyi.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
);
// mongoose.connect('mongodb://localhost:27017/naija', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true
// })
