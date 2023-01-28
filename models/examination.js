
const fs = require("fs")
const path = require("path")

const uid = ()=>{
    return Date.now().toString(36) + Math.random().toString(36).substring(5);
}

const registerExamination = (id , date , disease) => {

    // reading JSON file
    const examinations = fs.readFileSync(path.join(__dirname , "../database/examinations.json") , "utf-8")
   
    // 
    var examinationsJSON = []
    if (examinations.length !== 0){
        examinationsJSON = JSON.parse(examinations)
    }
    

    if(!id){
        const newExaminations = {
            id: uid(),
            date: date,
            disease: disease,
        }
    
        examinationsJSON.push(newExaminations)
        
    }
    else{

        const newExaminationsJson = examinationsJSON.map((examination) => {
            if (examination.id === id){
                examination.date = date;     
                examination.disease = disease;
            }
            return examination 
        }) 

        examinationsJSON = newExaminationsJson;

    }
    
    try{
        fs.writeFileSync(path.join(__dirname , "../database/examinations.json") , JSON.stringify(examinationsJSON) , "utf-8");
        return true;
    }catch(err){
        console.log(err);
    }

}

const getExaminations = () => {

    const examinations = fs.readFileSync(path.join(__dirname , "../database/examinations.json") , "utf-8")
    
    var examinationsJSON =[]
    if (examinations.length !== 0){
        examinationsJSON = JSON.parse(examinations)
    }

    return examinationsJSON;
}

const deleteExamination = (id) => {

    const examinations = fs.readFileSync(path.join(__dirname , "../database/examinations.json") , "utf-8")

    var examinationsJSON = []
    if (examinations.length !== 0)
        examinationsJSON = JSON.parse(examinations)

    const examination = examinationsJSON.find(examination => id === examination.id)
    
    if (examination){
       
        const newExaminationsJSON = examinationsJSON.filter(examination => examination.id !== id)
        try{
            fs.writeFileSync(path.join(__dirname , "../database/examinations.json") , JSON.stringify(newExaminationsJSON) , "utf-8");
            return true;
        }catch(err){
            console.log(err);
        }
    }
    else return false ;
    
}



const getExaminationByID = (id) => {

    const examinations = fs.readFileSync(path.join(__dirname , "../database/examinations.json") , "utf-8")
    
    var examinationsJSON =[]
    if (examinations.length !== 0){
        examinationsJSON = JSON.parse(examinations)
    }

    const examination = examinationsJSON.find(examination => examination.id === id)

    return examination;

}

module.exports = {
    registerExamination,
    getExaminationByID,
    getExaminations,
    deleteExamination,
}