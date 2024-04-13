// LoginPage.js
import  { useState } from 'react';

import {toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import {setUser} from '../features/userSlice.js'

import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
    const dispatch = useDispatch();
    const [aadhar , setAadhar] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setUser({aadhar, password}))
    axios.post('http://localhost:3001/Login',{ aadhar, password}).
    then((res)=>{
        if(res.data==="success")
        {
          toast.success(" Logged in you can vote if you didn't!" , {theme:"dark"});
          navigate('/VotingPage')

        }
        else if(res.data==="incorrect password")
        {
          toast.error(" Incorrect password!" , {theme:"dark"});
        }
         
    }).
    catch((err)=>console.log(err))

  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Log in</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-5">
            <div>
            <label htmlFor="Aadhar" className="sr-only">Email address</label>
              <input id="Aadhar" name="aadhar" type="Aadhar"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  bg-black px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Aadhar Number" onChange={(e)=>setAadhar(e.target.value)} value={aadhar} />
            </div>
            <div>
            <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-black px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
