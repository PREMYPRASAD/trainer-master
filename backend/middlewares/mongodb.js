const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Premynithin:Manumalu123@cluster0.zocaami.mongodb.net/ictaklearnertracker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoDB connected successfully!!!')
}).catch((error) => {
    console.log(error.message)
})