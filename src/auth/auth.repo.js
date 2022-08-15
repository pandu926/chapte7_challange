const { user } = require("../database/models");

const getUsersByEmail = async(email) => {
    return await user.findOne({
        where: { email },
        raw: true
    });
}
const repo = {
    getUsersByEmail,
}

module.exports = repo;