const fs = require("fs");
const path = require("path");

const registerMilk = (isNew, date, quantity) => {
  // reading JSON file
  const milkList = fs.readFileSync(path.join(__dirname, "../database/milk.json"), "utf-8");

  //
  var milkListJSON = [];
  if (milkList.length !== 0) {
    milkListJSON = JSON.parse(milkList);
  }

  if (isNew) {
    const milk = milkListJSON.find((milk) => milk.date === date);
    if (milk) return false;
    const newMilk = {
      date: date,
      quantity: quantity,
    };

    milkListJSON.push(newMilk);
  } else {
    const newMilkListJSON = milkListJSON.map((milk) => {
      if (milk.date === date) {
        milk.quantity = quantity;
      }
      return milk;
    });

    milkListJSON = newMilkListJSON;
  }

  try {
    fs.writeFileSync(path.join(__dirname, "../database/milk.json"), JSON.stringify(milkListJSON), "utf-8");
    return true;
  } catch (err) {
    console.log(err);
  }
};

const getMilkList = () => {
  const milkList = fs.readFileSync(path.join(__dirname, "../database/milk.json"), "utf-8");

  var milkListJSON = [];
  if (milkList.length !== 0) {
    milkListJSON = JSON.parse(milkList);
  }

  return milkListJSON;
};

const deleteMilk = (date) => {
  const milkList = fs.readFileSync(path.join(__dirname, "../database/milk.json"), "utf-8");

  var milkListJSON = [];
  if (milkList.length !== 0) milkListJSON = JSON.parse(milkList);

  const milk = milkListJSON.find((milk) => date === milk.date);

  if (milk) {
    const newMilkListJSON = milkListJSON.filter((milk) => milk.date !== date);

    try {
      fs.writeFileSync(path.join(__dirname, "../database/milk.json"), JSON.stringify(newMilkListJSON), "utf-8");
      return true;
    } catch (err) {
      console.log(err);
    }
  } else return false;
};

const getMilkByID = (id) => {
  const milkList = fs.readFileSync(path.join(__dirname, "../database/milk.json"), "utf-8");

  var milkListJSON = [];
  if (milkList.length !== 0) {
    milkListJSON = JSON.parse(milkList);
  }

  const milk = milkListJSON.find((milk) => milk.id === id);

  return milk;
};

module.exports = {
  registerMilk,
  getMilkByID,
  getMilkList,
  deleteMilk,
};
