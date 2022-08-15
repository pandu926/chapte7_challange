const repo = require("./auth.repo");

const dataUser = async(email) => {
    return await repo.getUsersByEmail(email);
}

const service = {
    dataUser,
}

module.exports = service;