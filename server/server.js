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

const EmailModel = mongoose.model('EmailSubscriptionList', emailSchema)

app.get('/emails', (req, res) =>{
    EmailModel.find().then(info => console.log(info)).catch(err => console.log(err))
})


app.post('/emails', (req, res) => {
    EmailModel.find({email: req.body.email}, {_id: 1, email: 1}).then(res => {
        if(res.length<1)
        {
            console.log("new email")
            const newEmailModel = new EmailModel({
                email: req.body.email,
            })
            newEmailModel.save().catch(err => console.log(err)).then(res => console.log(res)).then(console.log("success"))
        }
        else
        {
            console.log(`Email: ${req.body.email} alr exists ${res.length} times in database`)
        }

    })
})

app.delete('/emails/:id', (req, res) => {
    EmailModel.findByIdAndDelete(req.params.id).then(res => console.log(`successfully deleted entry with ID: ${req.params.id}`)).catch(err => console.log(err))
})

app.listen(5000, ()=>{console.log("Server is running at port 5000")})
