const service = require("./user.service");

const registration = async(req, res) => {
    const { fullname, email, password } = req.body;
    console.log(req.body);
    const registerUser = await service.register({ fullname, email, password });
    return res.json(registerUser);
}
const fetchUser = async(req, res) => {
    const allUser = await service.getUsersAll();
    return res.json(allUser);
}
const updateUser = async(req, res) => {
    const { id } = req.params;
    const { fullname, email, password } = req.body;
    const data = await service.update({ id, fullname, email, password });
    return res.json(data);

}

const controller = {
    registration,
    updateUser,
    fetchUser,
}

module.exports = controller;