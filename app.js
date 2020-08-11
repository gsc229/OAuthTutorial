const express = require('express')
const dotenv = require('dotenv')
// import routes 
const authRoutes = require('./routes/auth-routes')

dotenv.config({path: './config/config.env'})

const app = express()


// set view engine
app.set('view engine', 'ejs')

// use routes
app.use('/auth', authRoutes)

// create home route
app.get('/', (req, res) => {
    res.render('home')
});

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`app now listening for requests on port ${port}`)
});