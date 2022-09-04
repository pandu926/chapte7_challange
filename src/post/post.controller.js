const service = require("./post.service");

const getPostAll = async(req, res) => {
    const {
        writter,
        search
    } = req.query;


    try {
        if (writter) {
            const data = await service.getPostByWriter({
                writter
            });
            return res.status(200).json(data);
        }
        const data = await service.getPost(writter, search);
        return res.status(200).json(data);
    } catch (error) {
        return error;
    }




}

const getPostSingle = async(req, res) => {
    const {
        id
    } = req.params;
    const getpost = await service.getSingle(id);
    return res.json(getpost);
}

const upadatePost = async(req, res) => {
    const {
        id
    } = req.params;
    const user_id = req.auth.id;
    const {
        title,
        body,
        image
    } = req.body;
    const post = await service.updatePost({
        id,
        user_id,
        title,
        body,
        image
    });
    return res.json(post);
};

const createPost = async(req, res) => {
    const {
        title,
        body,
        image
    } = req.body;
    const user_id = req.auth.id;
    const post = await service.addPost({
        user_id,
        title,
        body,
        image
    });
    return res.json(post);
};
const deletePost = async(req, res) => {
    const {
        id
    } = req.params;
    const user_id = req.auth.id;
    const post = await service.deletePost({
        id,
        user_id
    });
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