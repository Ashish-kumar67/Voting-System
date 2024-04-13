const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app=express()
const VoterModel = require('./models/voter')
const PartyModel = require('./models/party')

app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/Voting-System') // connected to Voting-System

app.post('/voter-registration',(req,res)=>{
    VoterModel.create(req.body).
    then((emp)=>res.json(emp)).
    catch((err)=>res.json(err))
})
app.post('/party-registration',(req,res)=>{
    PartyModel.create(req.body).
    then((emp)=>res.json(emp)).
    catch((err)=>res.json(err))
})

app.post('/Login', (req, res)=>{
    const {aadhar , password} = req.body;
    VoterModel.findOne({aadhar:aadhar}).
    then((user)=>{
        if(user)
        {
            if(user.password===password)
        {
            res.json("success")
        }
        else
        {
           res.json("incorrect password")
        }
        }
        else
        res.json("voter doesnt exist")
       
        
    })
})



app.post('/checkSign', (req, res)=>{
    const {aadhar} = req.body;
    VoterModel.findOne({aadhar:aadhar}).
    then((user)=>{
        if(user)
        {
           res.json("found")
        }
        else
        res.json("voter doesnt exist")
       
        
    })
})


app.post('/canvote', (req, res)=>{
    const {aadhar} = req.body;
    VoterModel.findOne({aadhar:aadhar})
        .then((voter)=>{
           
                if(voter.voted===false)
            {
                res.json("success")
            }
            else
            {
               res.json("cant vote")
            }
            
        })
})



app.put('/voting', (req, res)=>{
    const {aadhar} = req.body;
    VoterModel.findOneAndUpdate({aadhar:aadhar},
        {voted :true},
        {new : true}
        
        
        )
        .then(() => {
            res.json("success"); 
        })
        .catch((err) => {
            console.error("Error updating voter:", err);
            res.status(500).json("Internal server error");
        });
})





app.post('/Parties', (req, res) => {
    const { party } = req.body;
    PartyModel.find({ party: party })
    .then((parties) => {
        if (parties.length > 0) {
            res.json(parties); // Sending the array of parties that match the criteria
        } else {
            res.json("fail");
        }
    })
    .catch((error) => {
        console.error("Error finding parties:", error);
        res.status(500).json("Internal server error");
    });
});



app.put('/UpdateVote', (req, res) => {
    const { _id } = req.body;
    console.log(req.body)
    
    // Find the user by Aadhar number and update the password
    PartyModel.findOneAndUpdate({ _id: _id } , 
        { $inc: { voteCount: 1 } }, // Increment the vote count by 1
        { new: true } // Return the updated document
        )
        .then(() => {
            res.json("success"); // Password updated successfully
        })
        .catch((err) => {
            console.error("Error updating password:", err);
            res.status(500).json("Internal server error");
        });
});



app.listen(3001,()=>{
    console.log("server listening")
})