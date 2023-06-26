const fs = require("fs");
const path = require("path");

const userExist = (username, password) => {
  // reading file
  const users = fs.readFileSync(path.join(__dirname, "../database/users.json"), "utf-8");

  // parsing file
  const usersJSON = JSON.parse(users);

  // searching & checking for the user
  const user = usersJSON.find((user) => user.username === username && user.password === password);

  //
  if (user) return user;
  else return false;
};

module.exports = userExist;
