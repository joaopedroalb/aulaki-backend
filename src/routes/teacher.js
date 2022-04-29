const router = require('express').Router()

router.get('/', async (req,res) =>{
    const {name} = req.query
    if(!name)
        res.send({'result':'aqui vai retornar todos os teachers'})
    else 
        res.send({'result': `aqui vai retornar os teachers com os nomes ${name}`})
})

router.get('/:id', async (req,res) =>{
    const {id} = req.params
    res.send({'result':`aqui vai retornar os teachers com esse id : ${id}`})
})

module.exports = router