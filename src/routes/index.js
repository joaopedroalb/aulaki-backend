const router = require('express').Router()

router.use('/teacher',require('./teacher'))
router.use('/class',require('./class'))
router.get('/', async (req,res) =>{
    return res.status(200).send({routes:"/teacher and /class"})
})

module.exports = router