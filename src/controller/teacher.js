const lstTeachers = require("../db/teachers.json")

const getAll = (req,res) =>{
    const {name,city} = req.query
    try{
        if(!name && !city)
            return res.send(lstTeachers)

        if(!city){
            const lstResult = lstTeachers.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()))

            if(lstResult.length<=0) throw{error:"MISSING NAME"}

            return res.send(lstResult)
        }
            
        if(!name){
            const lstResult = lstTeachers.filter(x=>x.city.toLowerCase().includes(city.toLowerCase()))

            if(lstResult.length<=0) throw{error:"MISSING CITY"}

            return res.send(lstResult)
        }

        const lstResult = lstTeachers.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()) && 
                                                x.city.toLowerCase().includes(city.toLowerCase()))

        if(lstResult.length<=0)throw{error:"MISSING WITH CITY AND NAME PARAMS"}
    
        return res.send(lstResult)

    }catch(e){
        res.status(404).send(e);
    }
    
        
}

const getById = (req,res) =>{
    const {id} = req.params
    try{
        if(lstTeachers.filter(x=>x.id==id).length<=0)throw{error:"MISSING WITH ID"} 
        
        res.send(lstTeachers.filter(x=>x.id==id)[0])

    }catch(e){

        res.status(404).send(e)
    }
}

const getCity = () =>{
    const lstCity = []
    lstTeachers.forEach(x=>{
        if(lstCity.indexOf(x.city)==-1)
            lstCity.push(x.city)
    })
    
    return lstCity
}

module.exports = {
    getAll,getById,getCity
}