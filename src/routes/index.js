const router = require('express').Router()

router.use('/teacher',require('./teacher'))
router.use('/class',require('./class'))

module.exports = router