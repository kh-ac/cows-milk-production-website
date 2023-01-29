const getViewCows = (req, res) => {

    if (!require('../../session/check_login')(req, res))
        return res.redirect('/');

    const cowsJson = require('../../../models/cow').getCows();

    return res.render('view-cows', {
        cows: cowsJson
    });


}

module.exports = getViewCows;
