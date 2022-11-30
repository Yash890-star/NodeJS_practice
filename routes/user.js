const express = require('express')
const router = express.Router()
const dir = require('../util/helper')
const path = require('path')
const store = require('./admin')

router.get('/userlist',(req, res, next) => {
    res.sendFile(path.join(dir, 'views', 'userList.html'))
    console.log('from users js' ,store.users)
})

module.exports = router