import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setParties } from '../features/PartySlice';
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify'
import axios from 'axios';

const VotingPage = () => {
  const aadhar = useSelector(state => state.user.aadhar);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    let isMounted = true;
   // async function f(){
     axios.post('http://localhost:3001/Parties', { party: "party" })
      .then((res) => {
        if (res.data === "fail") {
          console.log("fail");
        } else {
          const parties = res.data;
          if (isMounted) {
            dispatch(setParties(parties));
            setLoading(false);
          }
        }
      })
      .catch((err) => console.log(err));
    
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const parties = useSelector(state => state.party.parties);

  const [selectedParty, setSelectedParty] = useState('');

  const handlePartySelect = (e) => {
    setSelectedParty(e.target.value);
  };

  const handleVoteSubmit = () => {
    
   if(!aadhar)
   {
    console.log("go through login page please")
    navigate('/VoterLogin')
    return
   }
 
   
    if(selectedParty==='')
    {
      toast.warning("select a party before voting " , {theme:"dark"});
      return;

    }
    
    axios.post('http://localhost:3001/canvote',{ aadhar}).
    then((res)=>{
        if(res.data==="success")
     {
       

      axios.put('http://localhost:3001/UpdateVote', { _id: selectedParty })
      .then((res) => {
        if (res.data === "success") {
          console.log(selectedParty)
          console.log("party vote updated");
          toast.success("vote counted" , {theme:"dark"});

        
         

        }
      })
      .catch((err) => console.log(err));



      axios.post('http://localhost:3001/voting', { aadhar })
      .then((res) => {
        if (res.data === "success") {
          console.log("valid voter voted");
         
          toast.success('You have voted successfully ');

       

        }
      })
      .catch((err) => console.log(err));





     }


    else{
     
      console.log("invalid voter! ")
      toast.error('Invalid voter ! may have voted earlier.' ,  {theme:"dark"});

        
    }


        
    }).
    catch((err)=>console.log(err))




    
    


   setSelectedParty('');








  };
  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Voting Page</h2>
        </div>
        <div className="flex justify-center">
          <select
            value={selectedParty}
            onChange={handlePartySelect}
            className="block w-full py-2 px-3 border bg-black text-yellow-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Party</option>
            {parties.map(party => (
              <option key={party._id} value={party._id}>{party.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={handleVoteSubmit}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
