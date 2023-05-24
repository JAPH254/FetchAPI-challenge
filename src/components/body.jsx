import  { useState, useEffect } from 'react';

const UniversitySearch = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://universitiesapi.onrender.com/v1/api/universities/${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };
  const Handleclear=()=>{
    setCountry("")
    setUniversities([]);
  }

  return (
    < >
    <div style={{backgroundColor:"#f6dbfa",minHeight:"480px",width:"1300px",}}>
    <div style={{gap:"4rem"}}>
      
      <br />
      <input type="text" placeholder="Enter a country" value={country} onChange={(e) => setCountry(e.target.value)}/>
      <button onClick={handleSearch} style={{margin:"3px"}}>Search</button>
      <button onClick={(Handleclear)} style={{margin:"3px"}}>clear</button>
      </div>
      <div style={{display:'',flexDirection:"column"}}>
        {universities.map((university, index) => (
          <p key={index}>
          <b> university name:</b> {university.name} <br />
           <b> Country located:</b> {university.country} <br />
           <b> University Domain: </b>{university.web_pages} <br /><br />
          </p>
        ))}
      </div>
      </div>
    </>
  );
};

export default UniversitySearch;
