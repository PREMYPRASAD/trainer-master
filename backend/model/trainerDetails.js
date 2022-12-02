const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var TrainerDetails = new Schema({
    trainerName: {
        type: String,
        required: true
    },
    trainerMobile: {
        type: Number,
        required: true
    },
    trainerEmail: {
        type: String,
        required: true
    },
    trainerAddress: {
        type: String,
        required: true
    },
    trainerOfflocation: {
        type: String,
        required: true
    },
    trainerUsername: {
        type: String,
        required: true
    },
    trainerPassword: {
        type: String,
        required: true
    }
});

var trainerdata = mongoose.model('trainer', TrainerDetails);

module.exports = trainerdata;