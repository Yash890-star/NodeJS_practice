const express = require('express')
const path = require('path')
const dir = require('../util/helper')

const router = express.Router()

router.use('/',(req, res, next) => { //use is used for similar paths and get checks for exact match
    res.status(404).sendFile(path.join(dir, 'views', '404.html'))
})

module.exports = router