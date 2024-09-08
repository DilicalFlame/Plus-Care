import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
    const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setHospitals(response.data);
    });
  }, []);

  const hospitalsList = hospitals.map(value => {
    return (
    <li key={value.uuid}>
      {value.name} - {value.address}
    </li>
    );
  });
  return (
    <div>
      <ul>{hospitalsList}</ul>
    </div>
  )
}

export default LandingPage
