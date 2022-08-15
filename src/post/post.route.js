const controller = require("./post.controller");
const express = require("express");
const { checkSchema } = require("express-validator");
const tokenVerification = require("../middleware/tokenVerification");
const { validate } = require("../middleware/validation");
const postRoute = express.Router();
const { createPostValidation, updatePostValidation } = require("../middleware/post.validation");


postRoute.get("/post", controller.getPostAll);
postRoute.get("/post/:id", controller.getPostSingle);
postRoute.post("/post/create", checkSchema(createPostValidation), validate, tokenVerification, controller.createPost);
postRoute.put("/post/update/:id", checkSchema(updatePostValidation), validate, tokenVerification, controller.upadatePost);


module.exports = postRoute;