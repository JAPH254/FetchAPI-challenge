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
    <div style={{gap:"2rem"}}>
      <input type="text" placeholder="Enter a country" value={country} onChange={(e) => setCountry(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
</div>
      <div>
        {universities.map((university) => (
          <li key={university.name}>
            {university.name} 
          </li>
        ))}
      </div>
    </>
  );
};

export default UniversitySearch;
