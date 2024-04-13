// Assuming you have a slice file for user information, e.g., userSlice.js

import { createSlice } from '@reduxjs/toolkit';






export const PartySlice = createSlice({
  name: 'party',
  initialState :{
    parties : [{a:"ash", b:"cash"}]
},
  reducers: {
    addParty: (state, action) => {
      const party ={
        
            
            name: action.payload.name,
            number: action.payload.number,
            party: "party",
            voteCount: 0,   
          
      }

      state.parties.push(party)
    },
    setParties: (state, action) => {
        const pi= action.payload
        
        //  pi.map((party)=>console.log(party))
        state.parties=pi
        
        
      },
    
  },
});

export const { addParty  , setParties} = PartySlice.actions;

export const selectPartyInfo = (state) => state.party.PartyInfo;

export default PartySlice.reducer;
