import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import partyReducer from '../features/PartySlice'


 

export const store = configureStore({

   reducer: {
      user: userReducer,
      party: partyReducer,
      // Add more reducers as needed
    },

})








