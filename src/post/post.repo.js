const { post } = require("../database/models");

const getPostAll = async() => {
    return await post.findAll();
}
const getPostWriter = async({ user_id }) => {
    return await post.findAll({
        where: { user_id },
        // order: [
        //     ['title', sort],
        // ],
        // limit: [((1 - 1) * limit), limit],
    });
}

const getSinglePost = async(id) => {
    return await post.findOne({
        where: { id }
    });


}

const createPostRepo = async({ user_id, title, body, image }) => {
    return await post.create({
        user_id,
        title,
        body,
        image,
    })
}

const updatePostRepo = async({ id, title, body, image }) => {
    return await post.update({
        title,
        body,
        image,
    }, {
        where: { id },
        returning: true,
    })
}
const deletePostRepo = async(id) => {
    return await post.destroy({
        where: { id }
    })
}

const repo = {
    getPostAll,
    createPostRepo,
    updatePostRepo,
    getSinglePost,
    deletePostRepo,
    getPostWriter
}

module.exports = repo;