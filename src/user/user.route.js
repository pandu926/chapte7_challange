const express = require("express");
const auth = require("../auth/auth.controller");
const {
    checkSchema
} = require("express-validator");
const userValidate = require("../middleware/user.validation");
const {
    validate
} = require("../middleware/validation");
const userRoute = express.Router();
const controller = require("./user.controller")
const {
    user
} = require("../database/models");

userRoute.post("/user/register", checkSchema(userValidate.registerUserValidation),
    validate, controller.registration);
userRoute.put("/user/:id", checkSchema(userValidate.updateUserValidation),
    validate, controller.updateUser);
userRoute.post("/auth/login", checkSchema(userValidate.authValidation), validate, auth.authentication);
userRoute.get("/user", async(req, res) => {
    const data = await user.findAll();
    return res.json(data);
})



module.exports = userRoute;