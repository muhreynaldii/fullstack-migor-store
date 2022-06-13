import React, { useState, useEffect } from "react";
import axios from "axios";

function Domisili() {
  const [domisili, setDomisili] = useState([]);

  useEffect(() => {
    getDomisili();
  }, []);

  const getDomisili = async () => {
    const response = await axios.get("http://localhost:5000/domisili");
    setDomisili(response.data);
  };

  return (
    <div className="my-2 space-x-4">
      <select name="kecamatan" id="kecamatan" className="rounded border">
        {domisili.map((domisili, index) => (
          <option value={domisili.kecamatan} key={domisili.id}>
            {domisili.kecamatan}
          </option>
        ))}
      </select>
      <select name="kelurahan" id="kelurahan" className="rounded border">
        {domisili.map((domisili, index) => (
          <option value={domisili.kelurahan} key={domisili.id}>
            {domisili.kelurahan}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Domisili;
