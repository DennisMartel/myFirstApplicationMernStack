const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({message: []});

usersCtrl.createUser = (req, res) => res.json({message: 'usuario guardado'});

usersCtrl.deleteUser = (req, res) => res.json({message: 'usuario eliminado'});

module.exports = usersCtrl;