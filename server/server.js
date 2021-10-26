const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const uri = "mongodb+srv://sillyhill:pgxtpp5k@eye4eye.pt0wj.mongodb.net/UserInfo?retryWrites=true&w=majority"

mongoose.connect(uri, ({useNewUrlParser:true})).then(console.log("connected to MongoDB")).catch(err => console.log(err))

const emailSchema = new mongoose.Schema({
    email: String
})

const EmailModel = mongoose.model('EmailList', emailSchema)

app.post('/emails', (req, res) => {
    const newEmailModel = new EmailModel({
        email: req.body.email
    })
    newEmailModel.save().then(email => res.json(email))
})


app.listen(5000, ()=>{console.log("Server is running at port 5000")})