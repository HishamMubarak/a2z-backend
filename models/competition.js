
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompetitionSchema = new Schema({
    title :{
        type: String
    },
    domain :{
        type: String
    },
    url :{
        type: String
    },
    type :{
        type:String,
        enum: ['Online','InPerson']
    },
    applicationStartDate :{
        type: Date
    },
    applicationEndDate :{
        type: Date
    },
    place :{
        type: String
    },
    Country :{
        type: String
    },
    subscribe :{
        type: Boolean,
        default : false
    },
    active :{
        type: Boolean,
        default : true
    },
    bookmark :{
        type: Boolean,
        default : false
    },
});

const CompetitionResources = mongoose.model('competition', CompetitionSchema);
module.exports = CompetitionResources;
