
const uid = (uid) => {
    uid = parseInt(uid);
    return ++uid;
}

module.exports = uid;