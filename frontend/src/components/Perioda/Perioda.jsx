import React, { useState, useEffect } from "react";
import axios from "axios";

function Perioda() {
  const [perioda, setPerioda] = useState([]);

  useEffect(() => {
    getPerioda();
  }, []);

  const getPerioda = async () => {
    const response = await axios.get("http://localhost:5000/admin");
    setPerioda(response.data);
  };
  return (
    <select name="perioda" id="perioda" className="rounded border">
      {perioda.map((perioda, index) => (
        <option value={perioda.perioda}>{perioda.perioda}</option>
      ))}
    </select>
  );
}

export default Perioda;
