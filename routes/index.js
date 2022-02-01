const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))

router.use('/api', require('./monthRoutes.js'))

router.use('/api', require('./categoryRoutes.js'))

module.exports = router

