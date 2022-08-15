const { body } = require("express-validator");

const createPostValidation = {
    title: { in: ["body"],
        isString: true,
        notEmpty: true
    },
    body: { in: ["body"],
        isString: true,
        notEmpty: true
    },
    image: { in: ["body"],
        notEmpty: true
    }

};
const updatePostValidation = {
    title: { in: ["body"],
        isString: true,
        notEmpty: true
    },
    body: { in: ["body"],
        isString: true,
        notEmpty: true
    },
    image: { in: ["body"],
        notEmpty: true
    }

};

module.exports = { createPostValidation, updatePostValidation };