const router = require('express').Router()

const {getAll,getById,getCity} = require("../controller/teacher")

router.get('/', async (req,res) =>{
    getAll(req,res)
})

router.get('/search/:id', async (req,res) =>{
    getById(req,res)
})

router.get('/city',async(req,res)=>{
    res.send(getCity())
})

module.exports = router