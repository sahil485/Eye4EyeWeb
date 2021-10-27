const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())


const uri = "mongodb+srv://sillyhill:<password>@eye4eye.pt0wj.mongodb.net/emailList?retryWrites=true&w=majority"

mongoose.connect(uri, ({useNewUrlParser:true})).then(console.log("connected to MongoDB")).catch(err => console.log(err))

const emailSchema = new mongoose.Schema({
    email: String
})

const EmailModel = mongoose.model('EmailList', emailSchema)

app.get('/emails', (req, res) =>{
    EmailModel.find().then(info => console.log(info.json()))
})

app.post('/emails', (req, res) => {
    const newEmailModel = new EmailModel({
        email: req.body.email,
    })
    newEmailModel.save().then(res => res.json(res))
})


app.listen(5000, ()=>{console.log("Server is running at port 5000")})
