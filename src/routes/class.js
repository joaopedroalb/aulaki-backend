const router = require('express').Router()

const lstClasses = require("../db/classes.json")

const {getAll,getById,getByTeacher,getTags} = require("../controller/class")

router.get('/',async(req,res)=>{
    const {title} = req.query

    if(!title){
        res.send(getAll(title)) 
    }else{
        res.send(getAll(title))
    }
})

router.get('/search/:id', async(req,res)=>{
    const {id} = req.params

    res.send(getById(id))
})

router.get('/teacher/:id', async(req,res)=>{
    const {id} = req.params

    res.send(getByTeacher(id))
})

router.get('/tag', async(req,res)=>{
    res.send(getTags())
})

module.exports = router