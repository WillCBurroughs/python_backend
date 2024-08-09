import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

useEffect(() => {
  fetch("http://127.0.0.1:8000/members")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json(); // Parse the response as JSON
    })
    .then(data => {
      setData(data);
      console.log(data);
    })
    .catch(error => {
      console.error("Fetch error:", error);
    });
}, []);

  return (
    <div>
      {(typeof data === "undefined") ?(
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      ) }
    </div>
  )
}

export default App

