const router = require('express').Router()

router.get('/',async(req,res)=>{
    const {title} = req.query

    if(!title){
        res.send({'result':'aqui vai todas as aulas'}) 
    }else{
        res.send({'result':`aqui vai as aulas filtradas com o titulo contendo ${title}`})
    }
})

router.get('/search/:id', async(req,res)=>{
    const {id} = req.params

    res.send({'result':`aqui vai a aula com o id igual a ${id}`})
})

router.get('/teacher/:id', async(req,res)=>{
    const {id} = req.params

    res.send({'result':`aqui vai retornar as aulas do professor com id ${id}`})
})

router.get('/tag', async(req,res)=>{
    res.send({'result':'essa rota vai retornar as tags mais usadas entre todas as aulas sendo no max 10 e no minimo 2'})
})

module.exports = router