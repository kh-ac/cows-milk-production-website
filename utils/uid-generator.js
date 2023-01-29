
const uid = ()=>{
    return Date.now().toString(36) + Math.random().toString(36).substring(5);
}

module.exports = uid;