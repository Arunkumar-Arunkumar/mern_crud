const mysql = require('mysql2');
const { users } = require('../models');


const getusers = (req, res) => {

    res.status(200).json({ message: "Get Users" })
}

const addUsers = (req, res) => {

    var status;
    if (req.body.status == " ") {
        status = 1;
    }
    status = req.body.status;

    console.log("body data : ", req.body);

    if (req.body !== "" || req.body !== "undefined") {
        users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact,
            status: status
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        })
        res.status(200).json({ message: "User added successfully ...!" });
    } else {
        console.log("Kindly Enter the data...! ");
    }
}

const updateUsers = (req, res) => {
    res.status(200).json({ message: `Update Users ${req.params.id}` })
}

const deleteUsers = (req, res) => {
    res.status(200).json({ message: `Delete Users ${req.params.id}` })
}

module.exports = {
    getusers,
    addUsers,
    updateUsers,
    deleteUsers
}

