const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const uri = "mongodb+srv://sillyhill:pgxtpp5k@eye4eye.pt0wj.mongodb.net/UserInfo?retryWrites=true&w=majority"

mongoose.connect(uri, ({useNewUrlParser:true})).then(console.log("connected to MongoDB")).catch(err => console.log(err))

const emailSchema = new mongoose.Schema({
    email: String
})

const Todo = mongoose.model('EmailList', emailSchema)

app.get('/', (req, res) => {
    Todo.find().then(todo => res.json(todo))
})

app.post('/todos', (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    newTodo.save().then(todo => res.json(todo))
})

app.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id).then(()=>res.json({remove: true}))
})


app.listen(5000, ()=>{console.log("Server is running at port 5000")})