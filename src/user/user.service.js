const repo = require("./user.repo");
const bcrypt = require("bcrypt");

const register = async({ fullname, email, password }) => {
    const hashPassword = await bcrypt.hash(password, 10);
    const usersExist = await repo.getUsersByEmail(email);
    if (!usersExist) {
        return await repo.repoRegister({ fullname, email, password: hashPassword });
    } else {
        return "email sudah terdaftar";
    }
}
const update = async({ id, fullname, email, password }) => {
    const hashPassword = await bcrypt.hash(password, 10);
    const usersExist = await repo.getUsersByEmail(email);
    if (!usersExist) {
        return await repo.repoUpdate({ id, fullname, email, password: hashPassword });
    } else {
        return "update gagal email sudah terdaftar";
    }
}
const getUsersAll = async() => {
    return await repo.getUsersAll();
}

const service = {
    register,
    update,
    getUsersAll,
}

module.exports = service;