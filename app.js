require("dotenv").config();
const express = require("express");
const app = express();
const port = 443;
const userRoute = require("./src/user/user.route");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger');
const postRoute = require("./src/post/post.route");
const fs = require("fs");
const https = require('https')
const path = require("path");
const cors = require("cors");


// ssl 
const options = {
    key: fs.readFileSync("./ssl/private.key"),
    cert: fs.readFileSync('./ssl/certificate.crt'),
};

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());
app.use(userRoute);
app.use(postRoute);



app.get("/", (req, res) => {
    res.send("berhasil");
})

https.createServer(options, app).listen(port, function() {
    console.log("Express server listening on port " + port);
});