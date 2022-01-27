const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))

router.use('/api', require('./actualRoutes.js'))

router.use('/api', require('./goalRoutes.js'))

router.use('/api', require('./categoryRoutes.js'))

module.exports = router

