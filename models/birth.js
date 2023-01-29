const fs = require("fs");
const path = require("path");
const uid = require("../utils/uid-generator");


const registerBirth = (id, birthDate, motherID) => {

    // reading JSON file
    const births = fs.readFileSync(path.join(__dirname, "../database/births.json"), "utf-8");
    const cows = fs.readFileSync(path.join(__dirname, "../database/cows.json"), "utf-8");

    // 
    var birthsJSON = [];
    if (births.length !== 0) {
        birthsJSON = JSON.parse(births);
    }

    //
    var cowsJSON = [];
    if (cows.length !== 0) {
        cowsJSON = JSON.parse(cows);
    }

    mID = cowsJSON.find(cow => cow.id === motherID);

    // check if motherID is valid
    if (!mID && motherID.trim().length !== 0) {
        return false;
    }

    if (!id) {
        const newBirths = {
            id: uid(),
            birthDate: birthDate,
            motherID: motherID,
        };

        birthsJSON.push(newBirths)
    } else {

        const newBirthsJson = birthsJSON.map((birth) => {
            if (birth.id === id) {
                birth.birthDate = birthDate;
                birth.motherID = motherID;
            }
            return birth;
        })

        birthsJSON = newBirthsJson;
   }

    try {
        fs.writeFileSync(path.join(__dirname, "../database/births.json"), JSON.stringify(birthsJSON), "utf-8");
        return true;
    } catch (err) {
        console.log(err);
    }
}

const getBirths = () => {

    const births = fs.readFileSync(path.join(__dirname, "../database/births.json"), "utf-8");

    var birthsJSON = [];
    if (births.length !== 0) {
        birthsJSON = JSON.parse(births);
    }

    return birthsJSON;
}

const deleteBirth = (id) => {

    const births = fs.readFileSync(path.join(__dirname, "../database/births.json"), "utf-8");

    var birthsJSON = [];
    if (births.length !== 0)
        birthsJSON = JSON.parse(births);

    const birth = birthsJSON.find(birth => id === birth.id);

    if (birth) {

        const newBirthsJSON = birthsJSON.filter(birth => birth.id !== id);
        try {
            fs.writeFileSync(path.join(__dirname, "../database/births.json"), JSON.stringify(newBirthsJSON), "utf-8");
            return true;
        } catch (err) {
            console.log(err);
        }
    } else return false;

}



const getBirthByID = (id) => {

    const births = fs.readFileSync(path.join(__dirname, "../database/births.json"), "utf-8");

    var birthsJSON = [];
    if (births.length !== 0) {
        birthsJSON = JSON.parse(births);
    }

    const birth = birthsJSON.find(birth => birth.id === id);

    return birth;
}

module.exports = {
    registerBirth,
    getBirthByID,
    getBirths,
    deleteBirth,
};

