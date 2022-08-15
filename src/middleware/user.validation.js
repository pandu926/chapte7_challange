const { body } = require("express-validator");

const registerUserValidation = {
    fullname: { in: ["body"],
        isString: true,
    },
    email: { in: ["body"],
        isEmail: true,
    },
    password: { in: ["body"],
        isStrongPassword: true,
    },
};

const updateUserValidation = {
    fullname: { in: ["body"],
        isString: true,
    },
    email: { in: ["body"],
        isEmail: true,
    },
    password: { in: ["body"],
        isStrongPassword: true,
    },
};

const authValidation = {

    email: { in: ["body"],
        isEmail: true,
        notEmpty: true
    },
    password: { in: ["body"],
        isStrongPassword: true,
        notEmpty: true,

    },
};
const userValidate = {
    registerUserValidation,
    updateUserValidation,
    authValidation
}
module.exports = userValidate;