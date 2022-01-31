const router = require('express').Router()
const { Song, User } = require('../models')
const passport = require('passport')

router.get('/songs', passport.authenticate('jwt'), async function (req, res) {
  const songs = await Song.find({})
  res.json(songs)
})

router.post('/songs', passport.authenticate('jwt'), async function (req, res) {
  const song = await Song.create(req.body)
  await User.findByIdAndUpdate(req.user._id, { $push: { songs: song._id } })
  res.json(song)
})

router.put('/songs/:id', passport.authenticate('jwt'), async function (req, res) {
  await Song.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

router.delete('/songs/:id', passport.authenticate('jwt'), async function (req, res) {
  await Song.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
