const repo = require("./post.repo");


const getPost = async() => {
    return await repo.getPostAll();
}
const getPostByWriter = async({ user_id }) => {
    return await repo.getPostWriter({ user_id });
}
const getSingle = async(id, user_id) => {
    const data = await repo.getSinglePost(id);
    if (data.user_id == user_id) {
        return data;
    }
    return "bukan milikmu";

}
const addPost = async({ user_id, title, body, image }) => {
    return await repo.createPostRepo({ user_id, title, body, image });
}

const updatePost = async({ id, user_id, title, body, image }) => {
    const data = await repo.getSinglePost(id);
    if (data.user_id == user_id) {
        return await repo.updatePostRepo({ id, title, body, image });
    }
    return "anda bukan penulisnya";
}

const deletePost = async({ id, user_id }) => {
    const data = await repo.getSinglePost(id);
    if (data.user_id === user_id) {
        return await (repo.deletePostRepo(id), repo.getPostAll(user_id));
    }
    return "bukan milikmu";
}

const service = {
    getPost,
    addPost,
    updatePost,
    getSingle,
    deletePost,
    getPostByWriter
}

module.exports = service;