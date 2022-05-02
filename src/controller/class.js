const lstClasses = require("../db/classes.json")

const getAll = (title) =>{
    if(!title)
        return lstClasses
    const newList = lstClasses.filter(x=>x.title.toLowerCase().includes(title.toLowerCase()))
        return newList
}

const getById = (id)=>{
    return lstClasses.filter(x=>x.id==id)
}

const getByTeacher = (teacherId) =>{
    return lstClasses.filter(x=>x.teacher_id==teacherId)
}

const getTags = () =>{
    //TODO remember to change the code because i was in a hurry because of the daily

    let tags = []
    for(let index = 0; index < lstClasses.length; index++){
        tags = [...tags,...lstClasses[index].tags]
    }

    tags.sort()
    let aux = []

    for(var index in tags){
        const value = tags[index]
        const obj = {
                    name: value,
                    numbers:tags.filter(x=>x==value).length
                }

        if(!aux.filter(x=>x==obj).length>0){
            aux.push(obj)
        }
    }

    aux.sort((a,b)=>a.numbers - b.numbers)

    tags = []

    for(var index in aux){
        if(index<=10)
            tags.push(aux[index].name)
    }

    return tags
}

module.exports = {
    getAll,getById,getByTeacher,getTags
}