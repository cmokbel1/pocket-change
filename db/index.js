module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/pocketchange_db')
