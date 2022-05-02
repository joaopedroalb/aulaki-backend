const lstTeachers = require("../db/teachers.json")

const getAll = (name,city) =>{
    if(!name && !city)
        return lstTeachers
    if(!city)
        return lstTeachers.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()))
    if(!name)
        return lstTeachers.filter(x=>x.city.toLowerCase().includes(city.toLowerCase()))
    
        return lstTeachers.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()) && 
                                        x.city.toLowerCase().includes(x.city.toLowerCase()))
    
        
}

const getById = (id) =>{
    return lstTeachers.filter(x=>x.id==id)
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