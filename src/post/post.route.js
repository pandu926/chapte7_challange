const controller = require("./post.controller");
const express = require("express");
const {
    checkSchema
} = require("express-validator");
const tokenVerification = require("../middleware/tokenVerification");
const {
    validate
} = require("../middleware/validation");
const postRoute = express.Router();
const upload = require("../utils/upload")
const {
    createPostValidation,
    updatePostValidation
} = require("../middleware/post.validation");


postRoute.get("/post", controller.getPostAll);
postRoute.get("/post/:id", controller.getPostSingle);
postRoute.post("/post/create", tokenVerification, upload.single("image"), controller.createPost);
postRoute.put("/post/update/:id", tokenVerification, upload.single("image"), controller.upadatePost);
postRoute.delete("/post/delete/:id", tokenVerification, controller.deletePost);



module.exports = postRoute;