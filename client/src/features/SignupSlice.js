import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {

}

export const SignupSlice = createSlice({
    name : 'SignupSlice' ,
    initialState ,
    reducers :{
        Signup : (state , action)=>{} // current state in sate actions->things we need to perform something
    }
}) 

export const {Signup} = SignupSlice.actions

export default SignupSlice.reducer

