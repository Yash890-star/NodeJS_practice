const express = require('express')
const dir = require('../util/helper')
const router = express.Router()

const path = require('path')

const store = []

router.get('/addusers',(req, res, next) => {
    res.sendFile(path.join(dir, 'views', 'addUser.html'))
})

router.post('/register',(req,res,next) => {
    store.push({title: req.body})
    res.redirect('/admin/addusers')
})

exports.routes = router //exports to other files
exports.users = store