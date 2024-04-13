const mongoose=require('mongoose')
const VoterSchema = new mongoose.Schema({
    name:String,
    aadhar:String,
    password:String,
    voter :String,
    voted :Boolean
})
const VoterModel = mongoose.model("voter", VoterSchema)
module.exports = VoterModel