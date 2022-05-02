const router = require('express').Router()

const {getAll,getById,getCity} = require("../controller/teacher")

router.get('/', async (req,res) =>{
    const {name,city} = req.query
    res.send(getAll(name,city))
})

router.get('/search/:id', async (req,res) =>{
    const {id} = req.params
    res.send(getById(id))
})

router.get('/city',async(req,res)=>{
    res.send(getCity())
})

module.exports = router