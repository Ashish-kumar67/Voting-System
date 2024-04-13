// SignupPage.js
import  { useState } from 'react';
import {toast } from 'react-toastify'
import axios from 'axios'
const AddPartyPage = () => {
  
  const [name , setName] = useState('')
  const [number , setNumber] = useState('')

  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(); // You can send this data to your backend for further processing
 
    axios.post('http://localhost:3001/party-registration',{name , number, party:"party" , voteCount: 0}).
    then((res)=>console.log(res)).
    catch((err)=>console.log(err))
     setName('')
     setNumber('')
     toast.success("party added!" , {theme:"dark"});
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Add party</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">Party-Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required
                className="appearance-none rounded-none relative block w-full bg-black px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            
            <div>
              <label htmlFor="Aadhar" className="sr-only">Party-Number</label>
              <input id="Aadhar" name="aadhar" type="Aadhar"  required
                className="appearance-none rounded-none relative bg-black block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Party Number" onChange={(e)=>setNumber(e.target.value)} value={number} />
            </div>
           
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add party!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPartyPage;
