const router = require('express').Router()
const { Actual, User, Goal, Category } = require('../models')
const passport = require('passport')
// get all
router.get('/actuals', passport.authenticate('jwt'), async function (req, res) {
  const actuals = await Actual.find({})
  res.json(actuals)
})
// create 1
router.post('/actuals', passport.authenticate('jwt'), async function (req, res) {
  const actual = await Actual.create({ ...req.body, user: req.user._id, catergory: req.body.categoryid })
  await Category.findByIdAndUpdate(req.body.categoryid, { $push: { actuals: actual._id } })
  await User.findByIdAndUpdate(req.user._id, { $push: { actuals: actual._id } })
  res.json(actual)
})
// edit 1
router.put('/actuals/:id', passport.authenticate('jwt'), async function (req, res) {
  await Actual.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})
// delete 1
router.delete('/actuals/:id', passport.authenticate('jwt'), async function (req, res) {
  await Actual.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
