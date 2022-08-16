const service = require("./post.service");

const getPostAll = async(req, res) => {
    const { writer } = req.query;
    if (writer) {
        const user_id = writer;
        const writerPost = await service.getPostByWriter({ user_id });
        return res.json(writerPost);
    }

    const PostAll = await service.getPost();
    return res.json(PostAll);
}

const getPostSingle = async(req, res) => {
    const { id } = req.params;
    const getpost = await service.getSingle(id);
    return res.json(getpost);
}

const upadatePost = async(req, res) => {
    const { id } = req.params;
    const user_id = req.auth.id;
    const { title, body, image } = req.body;
    const post = await service.updatePost({ id, user_id, title, body, image });
    return res.json(post);
};

const createPost = async(req, res) => {
    const { title, body, image } = req.body;
    const user_id = req.auth.id;
    const post = await service.addPost({ user_id, title, body, image });
    return res.json(post);
};
const deletePost = async(req, res) => {
    const { id } = req.params;
    const user_id = req.auth.id;
    const post = await service.deletePost({ id, user_id });
    return res.status(200).send(post);
}
const controller = {
    getPostSingle,
    getPostAll,
    upadatePost,
    createPost,
    deletePost,
}

module.exports = controller;