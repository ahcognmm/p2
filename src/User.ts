const mongo = require('./connection');
const { Schema, model } = require('mongoose');

const user: any = new Schema({
    username: String,
    password: String,
});

module.exports = model('User', user);