const router = require('express').Router()
const { Month, User, Category } = require('../models')
const passport = require('passport')

router.get('/months', passport.authenticate('jwt'), async function (req, res) {
  const months = await Month.find({})
  res.json(months)
})

router.get('/months/:id', passport.authenticate('jwt'), (req, res) => {
  Month.findById(req.params.id)
    .then(month => res.json(month))
    .catch(err => console.log(err))
})

router.post('/months', passport.authenticate('jwt'), async function (req, res) {
  const month = await Month.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { months: month._id } })
  res.json(month)
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
