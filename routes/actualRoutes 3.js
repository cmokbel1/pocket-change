const router = require('express').Router()
const { Actual, User } = require('../models')
const passport = require('passport')

router.get('/actuals', passport.authenticate('jwt'), async function (req, res) {
  const actuals = await Actual.find({})
  res.json(actuals)
})

router.post('/actuals', passport.authenticate('jwt'), async function (req, res) {
  const actual = await Actual.create(req.body)
  await User.findByIdAndUpdate(req.user._id, { $push: { actuals: actual._id } })
  res.json(actual)
})

router.put('/actuals/:id', passport.authenticate('jwt'), async function (req, res) {
  await Actual.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

router.delete('/actuals/:id', passport.authenticate('jwt'), async function (req, res) {
  await Actual.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
