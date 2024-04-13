const mongoose=require('mongoose')
const PartySchema = new mongoose.Schema({
    name:String,
    number:String,
    party :String,
    voteCount : Number
})
const PartyModel = mongoose.model("party", PartySchema)
module.exports = PartyModel