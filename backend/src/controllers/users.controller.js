const usersCtrl = {};

const User = require('../models/User');
const { findByIdAndDelete } = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.json({message: 'usuario guardado'})
};

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'usuario eliminado'});
};

module.exports = usersCtrl;