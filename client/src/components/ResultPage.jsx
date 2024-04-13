// ResultPage.js
import  { useEffect, useState } from 'react';
import axios from 'axios';

const ResultPage = () => {
  const [parties, setParties] = useState([]);

//   useEffect(() => {
//     // Fetch party data from the backend API
//     axios.get('http://localhost:3001/Parties')
//       .then((res) => {
//         setParties(res.data);
//       })
//       .catch((err) => console.error('Error fetching party data:', err));
//   }, []);
    

axios.post('http://localhost:3001/Parties', { party: "party" })
.then((res) => {
  if (res.data === "fail") {
    console.log("fail");
  } else {
    setParties( res.data);
   
  }
})
.catch((err) => console.log(err));

 

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Election Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parties.map((party) => (
          <div key={party._id} className="bg-black rounded-md shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">{party.name}</h2>
            <p className="text-white">Vote Count: {party.voteCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
