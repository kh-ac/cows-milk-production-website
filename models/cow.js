
const fs = require("fs")

const CowType = {
    Holstein: "Holstein",
    Montbeliarde : "Montbeliarde", 
}

class Cow {

    constructor( id , birthDate ,startDate,  type , motherID  ) {
        this.id = id;
        this.birthDate = birthDate;
        this.startDate = startDate;
        this.type = type;
        this.motherID = motherID;
    }

    toJson(){
        return {
            id : this.id,
            birthDate : this.birthDate,
            startDate : this.startDate,
            type : this.type,
            motherID : this.motherID,
        }
    }

    fromJson(json){
        return Cow(
            json["id"],
            json["birthDate"],
            json["startDate"],
            json["type"],
            json["motherID"],
        )
    }

    registerNewCow(birthDate ,startDate,  type , motherID ){

        // reading JSON file
        const cows = fs.readFileSync(path.join(__dirname , "../database/cows.json") , "utf-8")

        // 
        const cowsJSON = JSON.parse(cows)

        // check if motherID is valid
        if (motherID !== ""){

            if(!motherID){
                console.log("motherID is not valid");
                return false;
            }
        }

        const newCow = new Cow( (cowsJSON.length + 1).toString() , birthDate ,startDate,  type , motherID  )

        cowsJSON.push(newCow.toJson())

        try{
            fs.writeFileSync(path.join(__dirname , "../database/cows.json") , JSON.stringify(cowsJSON) , "utf-8");
            return true;
        }catch(err){
            console.log(err);
        }


    }
}