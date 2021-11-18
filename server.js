const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const path = require("path")

require("dotenv").config()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "client", "build")))



mongoose.connect(process.env.MONGODB_URI, ({useNewUrlParser:true})).then(console.log("connected to MongoDB")).catch(err => console.log(err))

const emailSchema = new mongoose.Schema({
    email: String
})

const EmailModel = mongoose.model('EmailSubscriptionList', emailSchema)

app.get('/emails', (req, res) =>{
    EmailModel.find().catch(err => console.log(err)).then(info => console.log(info))
})


app.post('/emails', async (req, res) => {
    var getNumber = await EmailModel.find({email: req.body.email}, {_id: 1, email: 1}).then(async(res) => {
        if(res.length<1)
        {
            const newEmailModel = new EmailModel({
                email: req.body.email,
            })
            const added = await newEmailModel.save().then(function(){return 1}).catch(err => console.log(err))
            return added                                                               
        }
        else
        {
            console.log(`Email: ${req.body.email} alr exists ${res.length} times in database`)
            return 0
        }

    }).then(function(number){return number})
    res.json({number: getNumber})
})

app.delete('/emails/:id', (req, res) => {
    EmailModel.findByIdAndDelete(req.params.id).then(res => console.log(`successfully deleted entry with ID: ${req.params.id}`)).catch(err => console.log(err))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, ()=>{console.log("Server is running at port 5000")})
