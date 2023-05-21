import  { useState, useEffect } from 'react';

const UniversitySearch = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    < >
    <div style={{backgroundColor:"#f6dbfa",minHeight:"480px",width:"1300px",}}>
    <div style={{gap:"4rem"}}>
      
      <br />
      <input type="text" placeholder="Enter a country" value={country} onChange={(e) => setCountry(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{display:'flex',flexDirection:"column"}}>
        {universities.map((university) => (
          <p key={university.name}>
          <b> university name:</b> {university.name} <br />
           <b> Country located:</b> {university.country} <br />
           <b> University Domain: </b>{university.domains[0]} <br /><br />
          </p>
        ))}
      </div>
      </div>
    </>
  );
};

export default UniversitySearch;
