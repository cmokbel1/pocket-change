const router = require('express').Router()
const { Month, User, Category } = require('../models')
const passport = require('passport')

router.get('/months', passport.authenticate('jwt'), async function (req, res) {
  const months = await Month.find({})
  res.json(goals)
})

router.post('/months', passport.authenticate('jwt'), async function (req, res) {
  const goal = await Month.create({ ...req.body, user: req.user._id, catergory: req.body.categoryid })
  await Category.findByIdAndUpdate(req.body.categoryid, { $push: { goals: goal._id } })
  await User.findByIdAndUpdate(req.user._id, { $push: { goals: goal._id } })
  res.json(goal)
})

router.put('/months/:id', passport.authenticate('jwt'), async function (req, res) {
  await Month.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

router.delete('/months/:id', passport.authenticate('jwt'), async function (req, res) {
  await Month.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
