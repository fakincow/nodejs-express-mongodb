const express = require('express')
const mongoose = require('mongoose')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const PORT = process.env.PORT || 3000
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://playFTW:1234Xc65ce!@cluster0.fdpgmgh.mongodb.net/todos', {
            useNewUrlParser: true
        }
        )
        app.listen(PORT, () => {
            console.log('Server has been started ....')
        })
    } catch (e) {
        console.log('error', e);
    }
}

start()