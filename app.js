require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./src/user/user.route");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/config/swagger');
const postRoute = require("./src/post/post.route");
const cors = require("cors");


app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(userRoute);
app.use(postRoute);

app.get("/", (req, res) => {
    res.send("berhasil");
})

app.listen(port, () => {
    console.log("sukses");
})