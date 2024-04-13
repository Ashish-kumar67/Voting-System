// SignupPage.js
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast } from 'react-toastify'
const SignupPage = () => {
  
  const [name , setName] = useState('')
  const [aadhar , setAadhar] = useState('')
  const [password , setPassword] = useState('')
  
 const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(); // You can send this data to your backend for further processing
    
    axios.post('http://localhost:3001/checkSign',{aadhar}).
    then((res)=>{
      if(res.data==="found")
      {
       
        console.log("already a voter!")
        toast.warning("already a voter !" , {theme:"dark"});
        navigate('/VoterLogin')
      }
      else
      {
        axios.post('http://localhost:3001/voter-registration',{name , aadhar, password , voter:"voter" , voted: false}).
        then((res)=>console.log(res)).
        catch((err)=>console.log(err))
         setName('')
         setPassword('')
         setAadhar('')
         toast.success("Signed up !" , {theme:"dark"});
         navigate('/')
      }
       
  })

   
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  bg-black px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div>
              <label htmlFor="Aadhar" className="sr-only">Aadhar</label>
              <input id="Aadhar" name="aadhar" type="Aadhar"  required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-black px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Aadhar Number" onChange={(e)=>setAadhar(e.target.value)} value={aadhar} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border  bg-black px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
