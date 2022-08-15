require("dotenv");
const service = require("./auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authentication = async(req, res) => {
    const { email, password } = await req.body;
    const userData = await service.dataUser(email);
    if (!userData) {
        return res.send("data tidak ada");
    }
    const isPassword = await bcrypt.compare(password, userData.password);
    if (isPassword) {
        const token = await jwt.sign({
                id: userData.id,
                fullname: userData.fullname,
                email: userData.email
            },
            process.env.JWT_SECRET_TOKEN, { expiresIn: "1d" }
        );
        console.log(token);
        return res.json({ accessToken: token });
    } else {
        return res.send("password salah");
    }

}

const auth = {
    authentication
}

module.exports = auth;