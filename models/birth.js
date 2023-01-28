
const fs = require("fs")
const path = require("path")

const uid = ()=>{
    return Date.now().toString(36) + Math.random().toString(36).substring(5);
}

const registerBirth = (id , birthDate , motherID) => {

    // reading JSON file
    const births = fs.readFileSync(path.join(__dirname , "../database/births.json") , "utf-8")
   
    // 
    var birthsJSON = []
    if (births.length !== 0){
        birthsJSON = JSON.parse(births)
    }
    
    // check if motherID is valid
    if (motherID !== ""){
        //const motherCow = cowsJSON.find(cow => cow.id === motherId);
        if(!motherID){
            console.log("motherID is not valid");
            return false;
        }
    }

    if(!id){
        const newBirths = {
            id: uid(),
            birthDate: birthDate,
            motherID: motherID,
        }
    
        birthsJSON.push(newBirths)
        
    }
    else{

        const newBirthsJson = birthsJSON.map((birth) => {
            if (birth.id === id){
                birth.birthDate = birthDate;     
                birth.motherID = motherID;
            }
            return birth 
        }) 

        birthsJSON = newBirthsJson;

    }
    
    try{
        fs.writeFileSync(path.join(__dirname , "../database/births.json") , JSON.stringify(birthsJSON) , "utf-8");
        return true;
    }catch(err){
        console.log(err);
    }

}

const getBirths = () => {

    const births = fs.readFileSync(path.join(__dirname , "../database/births.json") , "utf-8")
    
    var birthsJSON =[]
    if (births.length !== 0){
        birthsJSON = JSON.parse(births)
    }

    return birthsJSON;
}

const deleteBirth = (id) => {

    const births = fs.readFileSync(path.join(__dirname , "../database/births.json") , "utf-8")

    var birthsJSON = []
    if (births.length !== 0)
        birthsJSON = JSON.parse(births)

    const birth = birthsJSON.find(birth => id === birth.id)
    
    if (birth){
       
        const newBirthsJSON = birthsJSON.filter(birth => birth.id !== id)
        try{
            fs.writeFileSync(path.join(__dirname , "../database/births.json") , JSON.stringify(newBirthsJSON) , "utf-8");
            return true;
        }catch(err){
            console.log(err);
        }
    }
    else return false ;
    
}



const getBirthByID = (id) => {

    const births = fs.readFileSync(path.join(__dirname , "../database/births.json") , "utf-8")
    
    var birthsJSON =[]
    if (births.length !== 0){
        birthsJSON = JSON.parse(births)
    }

    const birth = birthsJSON.find(birth => birth.id === id)

    return birth;

}

module.exports = {
    registerBirth,
    getBirthByID,
    getBirths,
    deleteBirth,
}