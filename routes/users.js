var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')
require('dotenv').config()


mongoose.connect('mongodb+srv://kineUser:mFGQYY9N9TbEn5Nz@cluster0.4ml1awv.mongodb.net/test');

const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    name: String,
    password: String,
    email: String,
    profileImage: String,
    contact: Number,
    dob: Date,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'

    }]

});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);