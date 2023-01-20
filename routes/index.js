const EXPRESS = require("express");
const USER_ROUTES = require("./user");
const ROUTES_APP = (APP) => {
    APP.use("/customers", USER_ROUTES);
};

module.exports = ROUTES_APP;