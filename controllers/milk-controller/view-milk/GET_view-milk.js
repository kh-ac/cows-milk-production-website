const getViewMilk = (req, res) => {

    if (!require("../../session/check_login")(req, res))
        return res.redirect("/");

    const milkListJSON = require('../../../models/milk').getMilkList();

    return res.render('view-milk', {
        milkList: milkListJSON
    });

}

module.exports = getViewMilk;
