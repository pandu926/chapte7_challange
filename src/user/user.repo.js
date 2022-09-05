const {
    user
} = require("../database/models");

const getUsersAll = async() => {
    return await user.findAll();
}

const repoRegister = async({
    fullname,
    email,
    password
}) => {
    return await user.create({
        fullname,
        email,
        password
    });
}
const getUsersByEmail = async(email) => {
    return await user.findOne({
        where: {
            email
        }
    });
}

const repoUpdate = async({
    id,
    fullname,
    email,
    password
}) => {
    return await user.update({
        fullname,
        email,
        password,
    }, {
        where: {
            id
        },
        returning: true
    })
}
const repo = {
    repoRegister,
    getUsersByEmail,
    getUsersAll,
    repoUpdate
}

module.exports = repo;