const router = require('express').Router()
const { Actual, User, Goal, Category } = require('../models')
const passport = require('passport')

// get all
router.get('/categories', passport.authenticate('jwt'), async function (req, res) {
  const categories = await Category.find({})
  res.json(categories)
})

// make 1
router.post('/categories', passport.authenticate('jwt'), async function (req, res) {
  const categories = await Category.create(req.body)
  await User.findByIdAndUpdate(req.user._id, { $push: { categories: categories._id } })
  res.json(categories)
})

// edit 1
router.put('/categories/:id', passport.authenticate('jwt'), async function (req, res) {
  await Category.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// delete 1
router.delete('/categories/:id', passport.authenticate('jwt'), async function (req, res) {
  await Category.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router