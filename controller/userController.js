const User = require('../model/userModel');

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    User.createUser(name, email, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: "User Created", data: result });
    });
};

exports.getUsers = (req, res) => {
    User.getAllUser((err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(result);
    });
};

exports.getUserById = (req, res) => {
    User.getUserById(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(result);
    });
};

exports.updateUser = (req, res) => {
    const { name, email } = req.body;
    User.updateUser(req.params.id, name, email, (err, result) => {
        if (err) return res.status(500).send(err);
       
        res.status(200).json({ message: "User Updated", data: req.body });
    });
};

exports.deleteUser = (req, res) => {
    User.deleteUser(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
       res.status(200).json({ message: "User Deleted", data: result });
    });
};
