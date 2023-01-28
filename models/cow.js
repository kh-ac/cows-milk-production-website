
const fs = require("fs")
const path = require("path")


const uid = ()=>{
    return Date.now().toString(36) + Math.random().toString(36).substring(5);
}

const registerCow = (id , birthDate ,startDate,  breed , motherID) => {
    

    // reading JSON file
    const cows = fs.readFileSync(path.join(__dirname , "../database/cows.json") , "utf-8")
    

    // 
    var cowsJSON = []
    if (cows.length !== 0){
        cowsJSON = JSON.parse(cows)
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
        const newCow = {
            id: uid(),
            birthDate: birthDate,
            startDate: startDate,
            breed: breed,
            motherID: motherID,
        }
    
        cowsJSON.push(newCow)
        
    }
    else{

        const newCowsJson = cowsJSON.map((cow) => {
            if (cow.id === id){
                cow.startDate = startDate;
                cow.birthDate = birthDate;
                cow.breed = breed;
                cow.motherID = motherID;
            }
            return cow 
        }) 

        cowsJSON = newCowsJson;

    }
    
    

    try{
        fs.writeFileSync(path.join(__dirname , "../database/cows.json") , JSON.stringify(cowsJSON) , "utf-8");
        return true;
    }catch(err){
        console.log(err);
    }

}

const getCowByID = (id) => {

    const cows = fs.readFileSync(path.join(__dirname , "../database/cows.json") , "utf-8")
    
    var cowsJSON =[]
    if (cows.length !== 0){
        cowsJSON = JSON.parse(cows)
    }

    const cow = cowsJSON.find(cow => cow.id === id)

    return cow;

}

const getCows = () => {

    const cows = fs.readFileSync(path.join(__dirname , "../database/cows.json") , "utf-8")
    
    var cowsJSON =[]
    if (cows.length !== 0){
        cowsJSON = JSON.parse(cows)
    }

    return cowsJSON;
}

const deleteCow = (id) => {

    const cows = fs.readFileSync(path.join(__dirname , "../database/cows.json") , "utf-8")

    var cowsJSON = []
    if (cows.length !== 0)
        cowsJSON = JSON.parse(cows)

    const cow = cowsJSON.find(cow => id === cow.id)
    
    if (cow){
       
        const newCowsJSON = cowsJSON.filter(cow => cow.id !== id)
        try{
            fs.writeFileSync(path.join(__dirname , "../database/cows.json") , JSON.stringify(newCowsJSON) , "utf-8");
            return true;
        }catch(err){
            console.log(err);
        }
    }
    else return false ;
    
}




module.exports = {
    registerCow, 
    getCows,
    deleteCow,
    getCowByID,
}