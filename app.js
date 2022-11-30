const express = require('express')
const bodyParser = require('body-parser')


const pagenotfound = require('./routes/pnt')
const adminroute = require('./routes/admin')//gets all the middleware from the object that has been asigned
const userroute = require('./routes/user')

const app = express()

app.use(bodyParser.urlencoded({extended:false})) //used to parse forms 

app.use('/admin',adminroute.routes) //routes filter - only routes with /admin can go inside pretty cool
app.use(userroute)

app.use(pagenotfound)

app.listen(5000, () => {
    console.log('callback work')
})