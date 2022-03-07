const {Role, User} = require('../models');
const md5 = require('md5');

module.exports.renderRegistrationForm = async function(req, res){
    const roles = await Role.findAll();
    res.render('users/register', {
        roles
    });
};

module.exports.registerUser = async function(req, res){
    await User.create({
        email: req.body.email,
        password: md5(req.body.password),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role_id: req.body.role
    });
    res.redirect('/');
};