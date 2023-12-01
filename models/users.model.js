module.exports = (sequelize, Datatypes) => {
    const users = sequelize.define("users", {

        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        email: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        contact: {
            type: Datatypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        status: {
            type: Datatypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: false
            },
        }
    })

    return users;
}